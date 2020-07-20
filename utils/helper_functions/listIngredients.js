
import React from 'react'
import {
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native'
const ingredientsLink = 'https://spoonacular.com/cdn/ingredients_500x500/'

const listIngredients = (ingredients) => {
 return (
  ingredients.map((ingredient, index) => {
   const image = ingredientsLink + ingredient.image
   return (
    <View
     key={index}
     style={{ padding: 5, alignContent: 'space-between' }}
    >
     <Image
      source={{
       width: 0.25 * Dimensions.get('screen').width,
       height: 0.1 * Dimensions.get('screen').height,
       uri: image,
      }}
      style={{ resizeMode: 'contain' }}
     />
     <Text style={{ alignSelf: 'center' }}>{ingredient.name}</Text>
    </View>
   )
  })
 )
}

export default listIngredients