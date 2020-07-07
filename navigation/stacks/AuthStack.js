import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../../screens";
import { TabNav } from "./index";

const Auth = createStackNavigator();

export default function AuthStack(props) {
  return (
    <Auth.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Auth.Screen name="Login">
        {() => <Login {...props} log={props.log} />}
      </Auth.Screen>
      <Auth.Screen name="TabNav" component={TabNav} />
      {/* ADD REGISTER SCREEN HERE */}
    </Auth.Navigator>
  );
}
