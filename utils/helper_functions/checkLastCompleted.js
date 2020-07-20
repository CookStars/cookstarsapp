
import React from 'react'
import {
    StyleSheet,
    Text,

} from 'react-native'

const checkLastCompleted = (userInfo, recipe) => {
    const today = new Date().getDay()
 const currRecipeId = recipe.id
 
    let date = new Date()
    const dd = String(date.getDate()).padStart(2, '0')
    const mm = String(date.getMonth() + 1).padStart(2, '0') //January is 0!
    const yyyy = date.getFullYear()

 date = mm + '/' + dd + '/' + yyyy
    return !userInfo.recipeHistory[currRecipeId] ||
        userInfo.recipeHistory[currRecipeId].lastCompleted !== date 
}
const styles = StyleSheet.create({
 pointsText: {
  alignSelf: 'center',
  fontSize: 18,
  paddingVertical: 10,
  color: 'grey',
  fontWeight: 'bold',
 }
}
)
export default checkLastCompleted
