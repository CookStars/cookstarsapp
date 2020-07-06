import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Image,
  Alert,
} from "react-native";
import Constants from "expo-constants";

export default function SingleRecipe({ navigation }) {
  const recipe = {
    id: 1,
    title: "Broccoli Cheddar Soup, A Panera Bread Co. Copycat",

    summary:
      "You can never have too many main course recipes, so give Broccoli Cheddar Soup, A Panera Bread Co. Copycat a try. One serving contains <b>606 calories</b>, <b>26g of protein</b>, and <b>46g of fat</b>. This recipe serves 4 and costs $1.96 per serving. A mixture of chicken broth, kosher salt and pepper, half-and-half, and a handful of other ingredients are all it takes to make this recipe so flavorful",

    imageURL: "https://spoonacular.com/recipeImages/636178-556x370.jpg",

    ingredients:
      "2 bay leaves, 4 cups broccoli florets (about 1 head), 1/4 cup butter, 1 large carrot, diced, 1/4 cup flour, 2 cups half-and-half, Kosher salt and freshly ground pepper, 3 cups low-sodium chicken broth, 1/4 teaspoon nutmeg, 1 onion, chopped, 2 1/2 cups (about 8 ounces) grated sharp white and yellow cheddar cheese, plus more for garnish, 7 inches sourdough bread boules (round loaves), ",

    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step:
              "Melt the butter in a large Dutch oven or pot over medium heat.",
            ingredients: [
              {
                id: 1001,
                name: "butter",
                localizedName: "butter",
                image: "butter-sliced.jpg",
              },
            ],
            equipment: [
              {
                id: 404667,
                name: "dutch oven",
                localizedName: "dutch oven",
                image: "dutch-oven.jpg",
              },
            ],
          },
          {
            number: 2,
            step: "Add the onion and cook until tender, about 5 minutes.",
            ingredients: [
              {
                id: 11282,
                name: "onion",
                localizedName: "onion",
                image: "brown-onion.png",
              },
            ],
            equipment: [],
            length: {
              number: 5,
              unit: "minutes",
            },
          },
          {
            number: 3,
            step:
              "Whisk in the flour and cook until golden, 3 to 4 minutes, then gradually whisk in the half-and-half until smooth.",
            ingredients: [
              {
                id: 20081,
                name: "all purpose flour",
                localizedName: "all purpose flour",
                image: "flour.png",
              },
            ],
            equipment: [
              {
                id: 404661,
                name: "whisk",
                localizedName: "whisk",
                image: "whisk.png",
              },
            ],
            length: {
              number: 3,
              unit: "minutes",
            },
          },
          {
            number: 4,
            step:
              "Add the chicken broth, bay leaves and nutmeg, then season with salt and pepper and bring to a simmer.Reduce the heat to medium-low and cook, uncovered, until thickened, about 20 minutes.Meanwhile, prepare the bread bowls: Using a sharp knife, cut a circle into the top of each loaf, leaving a 1-inch border all around.",
            ingredients: [
              {
                id: 1102047,
                name: "salt and pepper",
                localizedName: "salt and pepper",
                image: "salt-and-pepper.jpg",
              },
              {
                id: 2004,
                name: "bay leaves",
                localizedName: "bay leaves",
                image: "bay-leaves.jpg",
              },
              {
                id: 2025,
                name: "nutmeg",
                localizedName: "nutmeg",
                image: "ground-nutmeg.jpg",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
              {
                id: 404745,
                name: "knife",
                localizedName: "knife",
                image: "chefs-knife.jpg",
              },
            ],
            length: {
              number: 20,
              unit: "minutes",
            },
          },
          {
            number: 5,
            step:
              "Remove the bread top, then hollow out the middle with a fork or your fingers, leaving a thick bread shell.",
            ingredients: [],
            equipment: [],
          },
          {
            number: 6,
            step:
              "Add the broccoli and carrot to the broth mixture and simmer until tender, about 20 minutes.Discard the bay leaves.Puree the soup in batches in a blender until smooth; you'll still have flecks of carrot and broccoli.Return to the pot. (Or puree the soup in the pot with an immersion blender.)",
            ingredients: [
              {
                id: 2004,
                name: "bay leaves",
                localizedName: "bay leaves",
                image: "bay-leaves.jpg",
              },
              {
                id: 11090,
                name: "broccoli",
                localizedName: "broccoli",
                image: "broccoli.jpg",
              },
              {
                id: 11124,
                name: "carrot",
                localizedName: "carrot",
                image: "sliced-carrot.png",
              },
            ],
            equipment: [
              {
                id: 404776,
                name: "immersion blender",
                localizedName: "immersion blender",
                image: "immersion-blender.png",
              },
              {
                id: 404726,
                name: "blender",
                localizedName: "blender",
                image: "blender.png",
              },
              {
                id: 404752,
                name: "pot",
                localizedName: "pot",
                image: "stock-pot.jpg",
              },
            ],
            length: {
              number: 20,
              unit: "minutes",
            },
          },
          {
            number: 7,
            step:
              "Add the cheese to the soup and whisk over medium heat until melted.",
            ingredients: [
              {
                id: 1041009,
                name: "cheese",
                localizedName: "cheese",
                image: "cheddar-cheese.png",
              },
            ],
            equipment: [
              {
                id: 404661,
                name: "whisk",
                localizedName: "whisk",
                image: "whisk.png",
              },
            ],
          },
          {
            number: 8,
            step:
              "Add up to 3/4 cup water if the soup is too thick.Ladle into the bread bowls and garnish with cheese.",
            ingredients: [
              {
                id: 1041009,
                name: "cheese",
                localizedName: "cheese",
                image: "cheddar-cheese.png",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
              {
                id: 404630,
                name: "ladle",
                localizedName: "ladle",
                image: "ladle.jpg",
              },
            ],
          },
        ],
      },
    ],
    vegan: false,
  };
  // ingredientList = () => {
  //   recipe.summary = recipe.summary.split('<b>')

  // }

  return (
    <View>
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{recipe.title}</Text>
        </View>
        <View style={styles.image}>
          <Image
            source={{
              width: 350,
              height: 300,
              uri: recipe.imageURL,
            }}
          />
        </View>
        <View>
          <Text style={styles.text}>{recipe.summary}</Text>
          <Text style={styles.text}>
            <Text style={{ fontWeight: "bold" }}>Ingredients: </Text>
            {recipe.ingredients}
          </Text>
        </View>
      </View>
    </ScrollView>
    <View  style={styles.startButton}>
        <Button title="Start"  onPress={()=> Alert.alert("Start button pressed.")}/>
      </View>
    </View>
  );
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
    fontFamily: "Georgia",
    backgroundColor: "#F4F1DE",
    textAlign: "justify",
  },
  startButton: {
    width: '100%', 
    height: 50, 
    backgroundColor: "#F18F01", 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
});
