import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Leaderboard } from "../../screens";

const Leaderbd = createStackNavigator();

export default function LeaderboardStack(props) {
  const { userInfo } = props;
  return (
    <Leaderbd.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Leaderbd.Screen name="Leaderboard">
        {() => <Leaderboard {...props} userInfo={userInfo} />}
      </Leaderbd.Screen>
    </Leaderbd.Navigator>
  );
}
