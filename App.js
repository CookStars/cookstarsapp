import { StatusBar } from 'expo-status-bar';
import { SecondScreen, Home, Login, SingleRecipe } from "./screens";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNav from "./navigation/TabNav.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" style={styles.container}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabNav" component={TabNav} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SingleRecipe" compoenet={SingleRecipe} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
