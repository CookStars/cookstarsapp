import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { UserProfile } from "../../screens";

const User = createStackNavigator();

export default function UserProfileStack() {
  return (
    <User.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false }}
    >
      <User.Screen name="Profile" component={UserProfile} />
      {/* ADD LOGOUT COMPONENT HERE IF NEEDED */}
    </User.Navigator>
  );
}
