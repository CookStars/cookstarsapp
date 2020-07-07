import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TabNav, AuthStack } from "./index";
// import { config, db } from "../firebaseconfig";

const Stack = createStackNavigator();

export default class AppNavigator extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggenIn: false,
    };
  }

  render() {
    // console.log(this.props.user);
    return (
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName="Login"
          style={styles.container}
          screenOptions={{ headerShown: false }}
        >
          {this.state.isLoggedIn ? (
            <Stack.Screen
              name="TabNav"
              component={TabNav}
              options={({ route }) => ({
                headerTitle: getHeaderTitle(route),
              })}
            />
          ) : (
            <Stack.Screen name="Login">
              {(props) => <AuthStack {...props} />}
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || "Home";

  switch (routeName) {
    case "Home":
      return "Home";
    case "Leaderboard":
      return "Leaderboard";
    case "Profile":
      return "Profile";
  }
}
