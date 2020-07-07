import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../../screens";
import { TabNav } from "../index";

const Auth = createStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator initialRouteName="Login">
      <Auth.Screen name="Login">{(props) => <Login {...props} />}</Auth.Screen>
      <Auth.Screen name="TabNav" component={TabNav} />
      {/* ADD REGISTER SCREEN HERE */}
    </Auth.Navigator>
  );
}
