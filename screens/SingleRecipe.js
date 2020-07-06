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
import {recipes} from '../Seed'
import Constants from "expo-constants";

export default function SingleRecipe({ navigation }) {
  
 const recipe = recipes[0]

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
