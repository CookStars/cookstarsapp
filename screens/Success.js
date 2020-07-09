import React from 'react'
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Image,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Dimensions
} from "react-native";


export default function SuccessPage(props){
  const {navigation} = props
  const {index, recipes} = props.route.params
  console.log(props)
  const img = recipes[index+1].image
  return(
    <View>
      <View>
        <Image source={require('../assets/avocadodance.jpg')} style={styles.stretch} />
      </View>
      <View>
      <Text> YAY YOU DID IT </Text>
      </View>
      <View>
        <Text>Point Status ---- + 10 points</Text>
      </View>
      <View>
        <Text>Check out tomorrow's recipe</Text> 
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('SingleRecipe', {index: index+1, recipes: recipes})}>
          <View>
            <Image source={{uri: img}} style={{width: Dimensions.get("screen").width, height:300}}/>
          </View>
        </TouchableOpacity>  
      </View>
      
      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    resizeMode: 'cover',
  },
});