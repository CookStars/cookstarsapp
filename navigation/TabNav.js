import React from "react";
// import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Leaderboard, UserProfile } from "../screens";

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Leaderboard" component={Leaderboard} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={UserProfile} />
    </Tab.Navigator>
  );
}
