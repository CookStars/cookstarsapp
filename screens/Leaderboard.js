import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";


export default function Leaderboard() {
  const users = [
    {
      firstName: "Grace",
      lastName: "Shopper",
      userName: "GShopper",
      email: "Gshopper@gmail.com",
      points: "50",
      vegan: false,
      favoriteRecipes: {},
      recipeHistory: {},
      imageURL: "",
      key: "1"

    },
    {
      firstName: "Lucy",
      lastName: "Doe",
      userName: "BadCat",
      email: "JDoe@gmail.com",
      points: "24",
      vegan: true,
      favoriteRecipes: {},
      recipeHistory: {},
      imageURL: "",
      key: "2"

    },
    {
      firstName: "Mary",
      lastName: "Doe",
      userName: "Chef123",
      email: "JDoe@gmail.com",
      points: "20",
      vegan: true,
      favoriteRecipes: {},
      recipeHistory: {},
      imageURL: "",
      key: "3"

    },
    {
      firstName: "Carl",
      lastName: "Doe",
      userName: "Foodie123",
      email: "JDoe@gmail.com",
      points: "10",
      vegan: true,
      favoriteRecipes: {},
      recipeHistory: {},
      imageURL: "",
      key: "4"

    },
    {
      firstName: "Suzie",
      lastName: "Doe",
      userName: "GordRamsay",
      email: "JDoe@gmail.com",
      points: "1",
      vegan: true,
      favoriteRecipes: {},
      recipeHistory: {},
      imageURL: "",
      key: "5"

    }
  ]

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          users.map((user) => {
            return (
              <View key={user.key}>

                <Text style={styles.user}>{user.userName} Total Points: {user.points}</Text>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  user: {
    marginTop: 24,
    padding: 30,
    backgroundColor: '#f18f01',
    fontSize: 24

  }
});
