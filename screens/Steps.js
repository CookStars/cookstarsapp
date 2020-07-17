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
import { db } from '../firebaseconfig'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const ingredientsLink = 'https://spoonacular.com/cdn/ingredients_500x500/'
const equipmentLink = 'https://spoonacular.com/cdn/equipment_500x500/'


export default function Steps(props) {
    const [currStep, setCurrStep] = useState(0)

    const { navigation } = props
    let { recipe, userInfo } = props.route.params

    const currRecipeId = recipe.id
    const currRecipeSteps = recipe.analyzedInstructions[0].steps
    const { equipment, ingredients, number, step } = currRecipeSteps[currStep]

 const recipeHistory = userInfo.recipeHistory
   console.log(currRecipeId,'last completed', userInfo.recipeHistory[currRecipeId])

 
 const updatePoints = () => {
  let today = new Date()
  const dd = String(today.getDate()).padStart(2, '0')
  const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  const yyyy = today.getFullYear()

  today = mm + '/' + dd + '/' + yyyy
  console.log('last completed', lastCompleted)
  const lastCompleted = userInfo.recipeHistory[currRecipeId].lastCompleted
  if (!lastCompleted || lastCompleted !== today) {
   db.collection('users')
    .doc(userInfo.userId)
    .update({
     points: userInfo.points + 10,
     recipeHistory: { ...recipeHistory, [currRecipeId]: {...recipe, lastCompleted: today}},
    })
  }
 }


    // const updatePoints = () => {
    //     if (!userInfo.recipeHistory.hasOwnProperty(currRecipeId)) {
    //         db.collection('users')
    //             .doc(userInfo.userId)
    //             .update({
    //                 points: userInfo.points + 10,
    //                 recipeHistory: { ...recipeHistory, [currRecipeId]: recipe },
    //             })
    //     }
    // }
 // console.log('LDAJFLJAFLJSDF',userInfo.recipeHistory[currRecipeId].lastCompleted)
    const checkStep = (currStep) => {
        if (currStep === 0) {
            return (
                <View
                    style={{
                        flexDirection: 'row-reverse',
                        justifyContent: 'space-between',
                        padding: 10,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            setCurrStep(currStep + 1)
                        }}
                        style={{
                            // elevation: 12,
                            backgroundColor: '#EF233C',
                            borderRadius: 10,
                            width: 0.4 * Dimensions.get('screen').width,
                            height: 35,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <View>
                            <Text style={{ color: 'white' }}>NEXT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        } else if (0 < currStep && currStep < currRecipeSteps.length - 1) {
            return (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        padding: 10,
                    }}
                >
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                setCurrStep(currStep - 1)
                            }}
                            style={{
                                backgroundColor: '#EF233C',
                                borderRadius: 10,
                                width: 0.4 * Dimensions.get('screen').width,
                                height: 35,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <View>
                                <Text style={{ color: 'white' }}>PREVIOUS</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                setCurrStep(currStep + 1)
                            }}
                            style={{
                                backgroundColor: '#EF233C',
                                borderRadius: 10,
                                width: 0.4 * Dimensions.get('screen').width,
                                height: 35,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <View>
                                <Text style={{ color: 'white' }}>NEXT</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else {
            return (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 10,
                    }}
                >
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                setCurrStep(currStep - 1)
                            }}
                            style={{
                                backgroundColor: '#EF233C',
                                borderRadius: 10,
                                width: 0.4 * Dimensions.get('screen').width,
                                height: 35,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <View>
                                <Text style={{ color: 'white' }}>PREVIOUS</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                updatePoints()
                                navigation.navigate('Success', {
                                    recipe: recipe,
                                    userInfo: userInfo,
                                })
                            }}
                            style={{
                                // elevation: 12,
                                backgroundColor: '#EF233C',
                                borderRadius: 10,
                                width: 0.4 * Dimensions.get('screen').width,
                                height: 35,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <View>
                                <Text style={{ color: 'white' }}>FINISH</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }

    const checkEquipment = () => {
        const listEquipment = equipment.map((tool, index) => {
            const image = equipmentLink + tool.image
            return (
                <View key={index} style={{ alignContent: 'space-between' }}>
                    <Image
                        source={{
                            width: 0.25 * Dimensions.get('screen').width,
                            height: 0.1 * Dimensions.get('screen').height,
                            uri: image,
                        }}
                        style={{ resizeMode: 'contain' }}
                    />
                    <Text style={{ alignSelf: 'center' }}>{tool.name}</Text>
                </View>
            )
        })

        if (equipment.length) {
            return (
                <View
                    style={{
                        padding: 8,
                        alignContent: 'space-between',
                    }}
                >
                    <View>
                        <Text style={{ padding: 5, fontSize: 18 }}>
                            Equipment
                        </Text>
                        <ScrollView
                            // key={index}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={
                                styles.scrollArea_contentContainerStyle
                            }
                        >
                            {listEquipment}
                        </ScrollView>
                    </View>
                </View>
            )
        } else {
            return (
                <View
                    style={{
                        flex: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ fontSize: 18 }}>No Equipment To Show</Text>
                </View>
            )
        }
    }

    const checkIngredients = () => {
        const listIngredients = ingredients.map((ingredient, index) => {
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
                    <Text style={{ alignSelf: 'center' }}>
                        {ingredient.name}
                    </Text>
                </View>
            )
        })

        if (ingredients.length) {
            return (
                <View
                    style={{
                        flex: 3,
                        padding: 8,
                        alignContent: 'space-between',
                    }}
                >
                    <View style={{}}>
                        <Text
                            style={{
                                padding: 5,
                                fontSize: 18,
                            }}
                        >
                            Ingredients
                        </Text>
                    </View>
                    <ScrollView
                        // key={index}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={
                            styles.scrollArea_contentContainerStyle
                        }
                    >
                        {listIngredients}
                    </ScrollView>
                </View>
            )
        } else {
            return (
                <View
                    style={{
                        flex: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ fontSize: 18 }}>No Ingredients To Show</Text>
                </View>
            )
        }
    }

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
                <View style={styles.listContainer}>{checkEquipment()}</View>
                <View style={styles.listContainer}>{checkIngredients()}</View>
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
                <View style={styles.listContainer}>{checkStep(currStep)}</View>
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
