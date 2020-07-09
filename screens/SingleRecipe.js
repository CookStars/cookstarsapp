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
import HTML from "react-native-render-html";

export default class SingleRecipe extends Component {
  constructor(props) {
    super(props);
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
              Alert.alert("Start button pressed.");
            }}
          />
        </View>
      );
    } else {
      return <View />;
    }
  }

  render() {
    const { index, day, recipe } = this.props.route.params;
    const { summary, title, image, ingredients } = recipe;
    const listIngredients = ingredients
      .map((ingredient) => ingredient.original)
      .join(", ");
    const newTagsSummary = summary
      .split(/\<a\b[^>]*>/)
      .join("<b><i>")
      .split(/\<\/a>/)
      .join("</i></b>");

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
                    uri: image,
                  }}
                />
              </View>
            </View>
            <View>
              <View style={styles.text}>
                <HTML html={newTagsSummary} baseFontStyle={styles.text} />
              </View>
              <View>
                <Text style={styles.text}>
                  <Text style={{ fontWeight: "bold" }}>Ingredients: </Text>
                  {listIngredients}
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
