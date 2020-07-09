import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNav, AuthStack } from './stacks/index';
import { firebase } from '../firebaseconfig';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

export default class AppNavigator extends React.Component {
  constructor() {
    super();
    this.state = { isLoggedIn: false };
    this.log();

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
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          providerData: user.providerData,
          isLoggedIn: true,
        };

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

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          style={styles.container}
          screenOptions={{ headerShown: false }}
        >
          {this.state.isLoggedIn ? (
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
