import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Leaderboard } from "../../screens";

const Leaderbd = createStackNavigator();

export default function LeaderboardStack() {
  return (
    <Leaderbd.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Leaderbd.Screen name="Leaderboard" component={Leaderboard} />
    </Leaderbd.Navigator>
  );
}
