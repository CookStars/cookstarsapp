import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import favicon from "../assets/favicon.png";
import CardView from "../components/CardView";
import Cards from "../components/Cards";
import { recipes } from "../Seed";

export default function HomeScreen({ navigation }) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const cards = () => {
    return weekdays.map((weekday, index) => (
      <Cards key={index} day={weekday} index={index} navigation={navigation}/>
    ));
  };
  return (
    <View style={styles.container}>
      <CardView style={styles.card} navigation={navigation}/>
      <Text style={styles.Text}>Recipes of the Week</Text>
      <ScrollView
        vertical={true}
        contentContainerStyle={styles.scrollArea_contentContainerStyle}
      >
        {cards()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollArea_contentContainerStyle: {
    flexWrap: "wrap",
    alignContent: "space-around",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  Text: {
    fontSize: 30,
  },
});
