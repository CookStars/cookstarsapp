import React, { Component } from "react";
import HTML from "react-native-render-html";

import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Image,
  Alert,
  SafeAreaView,
  Dimensions,
} from "react-native";

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
    const { navigation } = this.props;
    const {
      index,
      recipes,
      userInfo,
      recipeCompleted,
      recipeFinished,
    } = this.props.route.params;

    if (weekdays[index] === today && !recipeFinished) {
      return (
        <View style={styles.startButton}>
          <Button
            title="Start"
            onPress={() => {
              navigation.navigate("Steps", {
                index: index,
                recipes: recipes,
                userInfo: userInfo,
                recipeCompleted: recipeCompleted,
              });
            }}
          />
        </View>
      );
    } else {
      return <View />;
    }
  }

  render() {
    const { index, recipes } = this.props.route.params;
    const { summary, title, image, ingredients } = recipes[index];
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
          <ScrollView style={{backgroundColor:'white', bottom:50}}>
            <View style={styles.container}>
              <View style={styles.image}>
                <Image
                  source={{
                    width: Dimensions.get("screen").width,
                    height: 0.4 * Dimensions.get("screen").height,
                    uri: image,
                  }}
                />
              </View>
              <View>
                <Text style={styles.title}>{title}</Text>
              </View>
            </View>
            <View>
              <View></View>
   
                <View style={styles.text}>             
                <Text style={{fontWeight: 'bold'}}> Description: </Text>
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
          <View>
          <View>{this.checkDay()}</View>
          </View>

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: 0.6 * Dimensions.get("screen").height,
    backgroundColor: "white",
    // borderColor: "green",
    // borderWidth: 3,
    alignContent: "space-between",
  },
  title: {
    // borderWidth: 3,
    // borderColor: "purple",
    left: "6%",
    width: 0.9 * Dimensions.get("screen").width,
    fontSize: 28,
    marginTop: "5%",
    fontWeight: "bold",
    color: "black",
  },
  image: {
    // borderWidth: 3,
    // borderColor: "#EBEBD3",
    alignItems: "center",
    resizeMode: "stretch",
  },
  text: {
    // borderWidth:3,
    // borderColor:'#F78764',
    padding:30,
    fontSize: 16,
    textAlign: "auto",
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
