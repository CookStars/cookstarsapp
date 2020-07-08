import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  Dimensions,
} from "react-native";


export default function CardView(props) {
  const {navigation, recipes} = props
  const today = new Date().getDay();
  let img = recipes[today].image;

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          navigation.navigate("SingleRecipe", { index: today, recipes: recipes})
        }
      >
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: img,
            }}
            style={{ width: Dimensions.get("screen").width, height: 300 }}
          />
          <View style={styles.labelContainer}>
            <Text style={styles.recipeOfTheDay}>Recipe of the Day</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 5,
    width: Dimensions.get("window").width,
    height: 300,
  },
  imgContainer: {
    width: 411,
    height: 205,
  },
  labelContainer: {
    position: "absolute",
    top: 50,
    left: -20,
    height: 37,
    width: 190,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,1)",
  },
  recipeOfTheDay: {
    opacity: 0.9,
    backgroundColor: "transparent",
    color: "rgba(35,40,58,1)",
    fontSize: 19,
    marginTop: 7,
    marginLeft: 31,
  },
});
