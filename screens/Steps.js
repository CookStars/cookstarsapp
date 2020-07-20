import React, { useState } from 'react'
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
    Dimensions,
} from 'react-native'

import { SafeAreaProvider } from 'react-native-safe-area-context'

import {checkStep, checkEquipment, checkIngredients} from '../components/steps'


export default function Steps(props) {
 const [currStep, setCurrStep] = useState(0)

 const { navigation } = props
 let { recipe, userInfo } = props.route.params
 const currRecipeSteps = recipe.analyzedInstructions[0].steps
 const { equipment, ingredients, number, step } = currRecipeSteps[currStep]

  return (
   <SafeAreaProvider style={{ backgroundColor: 'white' }}>
    <View>
     <Text
      style={{
       height: 0.12 * Dimensions.get('screen').height,
       fontSize: 27,
       alignSelf: 'center',
       fontWeight: 'bold',
       paddingTop: '10%',
       color: 'tomato',
      }}
     >
      Step {number}
     </Text>
    </View>
    <View
     style={{
      height: 0.7 * Dimensions.get('screen').height,
     }}
    >
     <View style={styles.listContainer}>{checkEquipment(equipment)}</View>
     <View style={styles.listContainer}>{checkIngredients(ingredients)}</View>
     <View style={{ height: '38%' }}>
      <ScrollView>
       <Text
        style={{
         fontSize: 24,
         color: 'gray',
         padding: 20,
         justifyContent: 'center',
        }}
       >
        {step}
       </Text>
      </ScrollView>
     </View>
    </View>
    <View>
     <View style={styles.listContainer}>{checkStep(currStep, setCurrStep, recipe, navigation, userInfo)}</View>
    </View>
   </SafeAreaProvider>
  )
 }


const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        backgroundColor: '#F4F1DE',
    },
    listContainer: {
        height: '31%',
        flexDirection: 'column',
    },
    // image: {
    //   top: 10,
    //   alignItems: "center",
    //   resizeMode: "contain",
    //   overflow: "hidden",
    //   borderRadius: 37,
    // },
    // stepContainer: {
    //   flex: 2,
    // },
    // scrollArea_contentContainerStyle: {
    //   flex: 2,
    //   alignContent: "space-between",
    //   flexDirection: "row",
    // },
    // title: {
    //   fontSize: 32,
    //   textAlign: "center",
    //   marginTop: 10,
    //   fontWeight: "bold",
    //   color: "#F18F01",
    //   backgroundColor: "#f4f1de",
    // },
    // image: {
    //   flexDirection: "row",
    // },
    // step: {
    //   padding: 30,
    //   fontSize: 18,
    //   backgroundColor: "#F4F1DE",
    //   textAlign: "justify",
    // },
    // buttonContainer: {
    //   backgroundColor: "#008F68",
    //   borderRadius: 5,
    //   padding: 8,
    //   margin: 8,
    // },
})
