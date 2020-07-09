import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Image,
  Alert,
  SafeAreaView,
} from "react-native";
import { recipes } from "../Seed";
import Constants from "expo-constants";
import { db } from "../firebaseconfig.js";

export default class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
  }

  checkDay() {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = weekdays[new Date().getDay()];
    const { index } = this.props.route.params;
    if (weekdays[index] === today) {
      return (
        <View style={styles.startButton}>
          <Button
            title="Start"
            onPress={() => {
              this.getRecipes();
              Alert.alert("Start button pressed.");
            }}
          />
        </View>
      );
    } else {
      return <View />;
    }
  }

  getRecipes() {
    const recipes = db.collection("recipes");
    const result = recipes.get().then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data());
      console.log(data);
    });
  }

  render() {
    // const { index, day} = this.props.route.params
    const { index } = this.props.route.params;
    const { summary, title, imageURL, ingredients } = recipes[index];
    const noTagsSummary = summary.split("<b>").map((sentence) => {
      if (sentence.includes("</b>")) {
        let sentences = sentence.split("</b>");

        return (
          <Text key={Math.random()}>
            <Text style={{ fontWeight: "bold" }}>{sentences[0]}</Text>
            <Text>{sentences[1]}</Text>
          </Text>
        );
      } else return <Text key={Math.random()}>{sentence}</Text>;
    });

    return (
      <SafeAreaView>
        <View>
          <ScrollView>
            <View style={styles.container}>
              <View>
                <Text style={styles.title}>{title}</Text>
              </View>
              <View style={styles.image}>
                <Image
                  source={{
                    width: 350,
                    height: 300,
                    uri: imageURL,
                  }}
                />
              </View>
              <View>
                <Text style={styles.text}>{noTagsSummary}</Text>
                <Text style={styles.text}>
                  <Text style={{ fontWeight: "bold" }}>Ingredients: </Text>
                  {ingredients}
                </Text>
              </View>
            </View>
          </ScrollView>
          <View>{this.checkDay()}</View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F1DE",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
    color: "#F18F01",
    backgroundColor: "#f4f1de",
  },
  image: {
    top: 10,
    alignItems: "center",
    resizeMode: "contain",
    overflow: "hidden",
    borderRadius: 37,
  },
  text: {
    padding: 18,
    fontSize: 18,
    // fontFamily: "Georgia",
    backgroundColor: "#F4F1DE",
    textAlign: "justify",
    bottom: 50,
  },

  startButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#F18F01",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
});
