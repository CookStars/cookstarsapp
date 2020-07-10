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
} from "react-native";
 
const ingredientsLink = "https://spoonacular.com/cdn/ingredients_100x100/";
const equipmentLink = "https://spoonacular.com/cdn/equipment_100x100/";

export default function Steps(props) {
  const [currStep, setCurrStep] = useState(0);

  const { navigation } = props;
  const { index, recipes } = props.route.params;
  const currRecipeSteps = recipes[index].analyzedInstructions[0].steps;
  const { equipment, ingredients, number, step } = currRecipeSteps[currStep];

  const checkStep = (currStep) => {
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
        <View style={styles.buttonContainer}>
          <Button
            title="PREVIOUS"
            onPress={() => {
              setCurrStep(currStep - 1);
            }}
          />
          <Button
            title="FINISH"
            onPress={() =>
              navigation.navigate("Success", { index: index, recipes: recipes })
            }
          />
        </View>
      );
    }
  };

  const checkEquipment = () => {
    const listEquipment = equipment.map((tool, index) => {
      const image = equipmentLink + tool.image;
      return (
        <View key={index}>
          <Image
            source={{
              width: 150,
              height: 150,
              uri: image,
            }}
          />
          <Text>{tool.name}</Text>
        </View>
      );
    });

    if (equipment.length) {
      return (
        <View>
          <Text>Equipment</Text>
          <ScrollView
            key={index}
            horizontal={true}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            {listEquipment}
          </ScrollView>
        </View>
      );
    }
  };

  const checkIngredients = () => {
    const listIngredients = ingredients.map((ingredient, index) => {
      const image = ingredientsLink + ingredient.image;
      return (
        <View key={index}>
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

    if (ingredients.length) {
      return (
        <View style={styles.listContainer}>
          <View style={{ flex: 1 }}>
            <Text>Ingredients</Text>
          </View>
          <ScrollView
            key={index}
            horizontal={true}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            {listIngredients}
          </ScrollView>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Step {number}</Text>
      </View>
      <View style={styles.listContainer}>{checkEquipment()}</View>
      <View style={styles.listContainer}>{checkIngredients()}</View>
      <View style={styles.stepContainer}>
        <Text>{step}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.listContainer}>{checkStep(currStep)}</View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: "#F4F1DE",
  },
  listContainer: {
    flex: 3,
    flexDirection: "column",
  },
  image: {
    top: 10,
    alignItems: "center",
    resizeMode: "contain",
    overflow: "hidden",
    borderRadius: 37,
  },
  stepContainer: {
    flex: 2,
  },
  scrollArea_contentContainerStyle: {
    flex: 2,
    alignContent: "space-between",
    flexDirection: "row",
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
    flexDirection: "row",
  },
  step: {
    padding: 30,
    fontSize: 18,
    backgroundColor: "#F4F1DE",
    textAlign: "justify",
  },
  buttonContainer: {
    backgroundColor: '#008F68',
    borderRadius: 5,
    padding: 8,
    margin: 8,
  },
});
