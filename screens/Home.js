import React, { Component } from "react";
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
import { CardView, Cards } from "../components";
import { recipes } from "../Seed";
import { db } from "../firebaseconfig.js";

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vegan: [],
      meatlover: [],
      recipeFinished: false
    };
    this.recipeCompleted = this.recipeCompleted.bind(this)
    this.getRecipes = this.getRecipes.bind(this);
  }

  recipeCompleted = () => {
    this.setState({recipeFinished: true});
  };

  async getRecipes(pref) {
    let allRecipes;
    const recipes = await db.collection("recipes").doc(pref).get();
    if (recipes.exists) {
      allRecipes = recipes.data().recipe;
      console.log("Success, recipes found");
    } else {
      console.log("No data found");
    }

    this.setState({ vegan: allRecipes });
  }

  componentDidMount() {
    this.getRecipes("vegan");
  }

  render() {
    const cards = () => {
      return weekdays.map((weekday, index) => (
        <Cards
          key={index}
          day={weekday}
          index={index}
          navigation={this.props.navigation}
          recipes={this.state.vegan}
          userInfo = {this.props.userInfo}
          recipeFinished={this.state.recipeFinished}
          recipeCompleted={this.recipeCompleted}
        />
      ));
    };

    if (!this.state.vegan.length) {
      return null;
    }
    return (
      <View style={styles.container}>
        <CardView
          style={styles.card}
          navigation={this.props.navigation}
          recipes={this.state.vegan}
          userInfo={this.props.userInfo}
          recipeFinished={this.state.recipeFinished}
          recipeCompleted={this.recipeCompleted}
        />
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
