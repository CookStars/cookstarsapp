import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProfile } from '../../screens';

const User = createStackNavigator();

export default function UserProfileStack(props) {
  const { userInfo, logOut } = props;
  return (
    <User.Navigator
      initialRouteName='Profile'
      screenOptions={{ headerShown: false }}
    >
      <User.Screen name='Profile'>
        {(props) => (
          <UserProfile {...props} userInfo={userInfo} logOut={logOut} />
        )}
      </User.Screen>
      {/* ADD LOGOUT COMPONENT HERE IF NEEDED */}
    </User.Navigator>
  );
}
