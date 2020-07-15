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
