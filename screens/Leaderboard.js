import React, { useState, Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { db } from "../firebaseconfig.js";

export default class Leaderboard extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      status: false,
    };
    this.getUsers = this.getUsers.bind(this);
  }

  async getUsers() {
    console.log("I got into getUsers function");
    let allUsers = [];
    const users = await db.collection("users").get();
    if (users.empty) {
      console.log("No data found");
      return;
    }

    users.forEach((doc) => {
      allUsers.push(doc.data());
    });

    console.log("HERE ARE ALL THE USERS", allUsers);

    this.setState({ users: allUsers, status: true });
  }

  componentDidMount() {
    console.log("componentDidMount ran");
    this.getUsers();
  }

  render() {
    // const users = this.state.users;
    // console.log(users);
    if (!this.state.status) {
      console.log("no state fount, run componentDidMount");
      return null;
    }

    console.log("I got users oon state", this.state.users);
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.users.map((user, index) => {
            return (
              <View key={index}>
                <Text style={styles.user}>
                  {user.firstName || "Unknown"} Total Points: {user.points}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
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
    backgroundColor: "#f18f01",
    fontSize: 24,
  },
});

// const users = [
//   {
//     firstName: "Grace",
//     lastName: "Shopper",
//     userName: "GShopper",
//     email: "Gshopper@gmail.com",
//     points: "50",
//     vegan: false,
//     favoriteRecipes: {},
//     recipeHistory: {},
//     imageURL: "",
//     key: "1",
//   },
//   {
//     firstName: "Lucy",
//     lastName: "Doe",
//     userName: "BadCat",
//     email: "JDoe@gmail.com",
//     points: "24",
//     vegan: true,
//     favoriteRecipes: {},
//     recipeHistory: {},
//     imageURL: "",
//     key: "2",
//   },
//   {
//     firstName: "Mary",
//     lastName: "Doe",
//     userName: "Chef123",
//     email: "JDoe@gmail.com",
//     points: "20",
//     vegan: true,
//     favoriteRecipes: {},
//     recipeHistory: {},
//     imageURL: "",
//     key: "3",
//   },
//   {
//     firstName: "Carl",
//     lastName: "Doe",
//     userName: "Foodie123",
//     email: "JDoe@gmail.com",
//     points: "10",
//     vegan: true,
//     favoriteRecipes: {},
//     recipeHistory: {},
//     imageURL: "",
//     key: "4",
//   },
//   {
//     firstName: "Suzie",
//     lastName: "Doe",
//     userName: "GordRamsay",
//     email: "JDoe@gmail.com",
//     points: "1",
//     vegan: true,
//     favoriteRecipes: {},
//     recipeHistory: {},
//     imageURL: "",
//     key: "5",
//   },
// ];
