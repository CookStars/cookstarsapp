import React, { useState, Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { db } from "../firebaseconfig.js";

export default class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      status: false,
      userInfo: this.props.userInfo,
    };
    this.getUsers = this.getUsers.bind(this);
  }

  async getUsers() {
    let allUsers = [];
    const users = await db.collection("users").get();
    if (users.empty) {
      console.log("No data found");
      return;
    }

    users.forEach((doc) => {
      allUsers.push(doc.data());
    });

    this.setState({ users: allUsers, status: true });
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const users = this.state.users;
    const currentUser = this.state.userInfo;

    if (!this.state.status) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text>Leaderboard</Text>
        <Text styles={styles.personalPoints}>
          Your total points: {currentUser.points}
        </Text>
        <ScrollView>
          {users
            .sort((a, b) => a.points - b.points)
            .map((user, index) => {
              return (
                <View key={index} style={styles.userRow}>
                  <Text>{index}</Text>
                  <Text style={styles.user}>
                    {user.firstName || "Mysterious Cook"}
                  </Text>
                  <Text>Total Points: {user.points}</Text>
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
    marginTop: 50,
    // alignItems: "center",
    // justifyContent: "center",
  },
  user: {
    // marginTop: 24,
    padding: 10,
    fontSize: 24,
  },
  personalPoints: {
    backgroundColor: "#fff",
  },
  userRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f18f01",
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
