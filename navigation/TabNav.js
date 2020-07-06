import React from 'react';
// import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Leaderboard, UserProfile } from '../screens';
import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Leaderboard') {
            iconName = 'star';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
        style: { backgroundColor: '#F4F1DE' },
      }}
    >
      <Tab.Screen name='Leaderboard' component={Leaderboard} />
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Profile' component={UserProfile} />
    </Tab.Navigator>
  );
}
