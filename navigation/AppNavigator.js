import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNav, AuthStack } from './stacks/index';
import { firebase, db } from '../firebaseconfig';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { fetchVeganRecipes } from '../redux/recipeReducer';
import { fetchUserInfo } from '../redux/userReducer';

const Stack = createStackNavigator();

export class AppNavigator extends React.Component {
  constructor() {
    super();
    this.state = { isLoggedIn: false };
    // this.log();

    this.log = this.log.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  // Does not work right now
  // async getData() {
  //   const jsonValue = await AsyncStorage.getItem('userInfo');
  //   if (jsonValue) {
  //     console.log('json Value in getData:', jsonValue);
  //     return await JSON.parse(jsonValue);
  //   } else return;
  // }

  async log() {
    // When there is a change on firebase authentication load user data onto application state
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const userInfo = {
          userId: user.uid,
          email: user.email,
          isLoggedIn: true,
        };

        const docRef = db.collection(`users`).doc(user.uid);
        docRef
          .get()
          .then((doc) => {
            if (doc.exists) {
              const {
                favoriteRecipes,
                foodPreference,
                points,
                recipeHistory,
              } = doc.data();

              this.setState({
                favoriteRecipes,
                foodPreference,
                points,
                recipeHistory,
              });

              // console.log('Document data:', doc.data());
            } else {
              // doc.data() will be undefined in this case
              console.log('No such document!');
            }
          })
          .catch(function (error) {
            console.log('Error getting document:', error);
          });

        // Store User info using Async Storage inside userInfo
        try {
          const jsonValue = JSON.stringify(userInfo);
          await AsyncStorage.setItem('userInfo', jsonValue);
        } catch (e) {
          console.log(e);
        }

        // Set state with user information
        const jsonValue = await AsyncStorage.getItem('userInfo');
        if (jsonValue) {
          this.setState(JSON.parse(jsonValue));
        }
      }
    });
  }

  logOut() {
    firebase
      .auth()
      .signOut()
      .then(async () => {
        await AsyncStorage.removeItem('userInfo');
        this.setState({ isLoggedIn: false });
      });
  }

  async componentDidMount() {
    await this.props.getUserInfo();
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          style={styles.container}
          screenOptions={{ headerShown: false }}
        >
          {this.props.users.isLoggedIn ? (
            <Stack.Screen
              name='TabNav'
              screenOptions={{ headerShown: false }}
              options={({ route }) => ({
                headerTitle: getHeaderTitle(route),
              })}
            >
              {(props) => (
                <TabNav {...props} userInfo={this.state} logOut={this.logOut} />
              )}
            </Stack.Screen>
          ) : (
            <Stack.Screen name='Login'>
              {(props) => <AuthStack {...props} log={this.log} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// Map State + Dispatch
const mapState = (state) => ({
  users: state.user,
});

const mapDispatch = (dispatch) => {
  return {
    getUserInfo: () => dispatch(fetchUserInfo()),
  };
};

export default connect(mapState, mapDispatch)(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Home';

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Leaderboard':
      return 'Leaderboard';
    case 'Profile':
      return 'Profile';
  }
}
