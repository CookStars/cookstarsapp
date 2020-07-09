import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, SingleRecipe, Steps, SuccessPage} from "../../screens";

const HomeSt = createStackNavigator();

export default function HomeStack() {
  return (
    <HomeSt.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <HomeSt.Screen name="Home" component={Home} />
      <HomeSt.Screen name="SingleRecipe" component={SingleRecipe} />
      <HomeSt.Screen name="Steps" component={Steps} />
      <HomeSt.Screen name= "Success" component={SuccessPage} />
    </HomeSt.Navigator>
  );
}
