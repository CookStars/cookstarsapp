import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Image,
  Alert,
  SafeAreaView,
  _ScrollView,
} from "react-native";

const ingredientsLink = "https://spoonacular.com/cdn/ingredients_100x100/";
const equipmentLink = "https://spoonacular.com/cdn/equipment_100x100/";

export default function Steps(props) {

  const [currStep, setCurrStep] = useState(0);

  const { index, recipes } = props.route.params;
  const currRecipeSteps = recipes[index].analyzedInstructions[0].steps;
  const { equipment, ingredients, number, step } = currRecipeSteps[currStep];

  const checkStep = (currStep) => {
    console.log(currRecipeSteps.length - 1);
    if (currStep === 0) {
      return (
        <Button
          title="NEXT"
          onPress={() => {
            setCurrStep(currStep + 1);
          }}
        />
      );
    } else if (0 < currStep && currStep < currRecipeSteps.length - 1) {
      return (
        <View>
          <Button
            title="PREVIOUS"
            onPress={() => {
              setCurrStep(currStep - 1);
            }}
          />
          <Button
            title="NEXT"
            onPress={() => {
              setCurrStep(currStep + 1);
            }}
          />
        </View>
      );
    } else {
      return (
        <View>
          <Button
            title="PREVIOUS"
            onPress={() => {
              setCurrStep(currStep - 1);
            }}
          />
          <Button title="FINISH" onPress={() => Alert.alert("finished!!!!")} />
        </View>
      );
    }
  };


  const checkEquipment = (equipment) => {
    const listEquipment = equipment.map((tool, index) => {
      const image = equipmentLink + tool.image;
      return (
        <ScrollView
          key={index}
          horizontal={true}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <Image
            source={{
              width: 150,
              height: 150,
              uri: image,
            }}
            style={styles.image}
          />
          <Text>{tool.name}</Text>
        </ScrollView>
      );
    });

    if (equipment) {
      return (
        <ScrollView>
          <Text>Equipment</Text>
          <View>{listEquipment}</View>
        </ScrollView>
      );
    }
  };


  const checkIngredients = () => {
    const listIngredients = ingredients.map((ingredient, index) => {
      const image = ingredientsLink + ingredient.image;
      return (
        <View>
          <Image
            source={{
              width: 150,
              height: 150,
              uri: image,
            }}
            // style={styles.image}
          />
          <Text>{ingredient.name}</Text>
        </View>
      );
    });

    if (ingredients) {
      return (
        <View>
          <View>
            <Text>Ingredients</Text>
          </View>
          <ScrollView
            key={index}
            horizontal={true}
            // contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View>{listIngredients}</View>
          </ScrollView>
        </View>
      );
    }
  };


  return (
    <SafeAreaView style={styles.parentContainer}>
      <View >
        <View style={styles.listContainer}>{checkEquipment(equipment)}</View>
        <View style={styles.listContainer}>{checkIngredients(ingredients)}</View>
      </View>
      <View style={styles.listContainer}>
        <Text>Step {number}</Text>
        <Text>{step}</Text>
      </View>
      <View style={styles.listContainer}>{checkStep(currStep)}</View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: "#F4F1DE",
  },
  listContainer: {
    flex: 2,
  },
  scrollArea_contentContainerStyle: {
    flexWrap: "wrap",
    alignContent: "space-around",
    flexDirection: "row",
    justifyContent: "space-around",
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
  step: {
    padding: 30,
    fontSize: 18,
    backgroundColor: "#F4F1DE",
    textAlign: "justify",
  },
});
