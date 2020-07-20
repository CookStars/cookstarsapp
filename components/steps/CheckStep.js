import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native'
import { checkLastCompleted } from '../../utils/helper_functions'

import { updatePoints } from '../../utils/helper_functions'

export default function (currStep, setCurrStep, recipe, navigation, userInfo) {
    const currRecipeSteps = recipe.analyzedInstructions[0].steps
    console.log('checking in step',checkLastCompleted(userInfo, recipe))

    if (currStep === 0) {
        return (
            <View
                style={styles.oneButtonContainer}
            >
                <TouchableOpacity
                    onPress={() => {
                        setCurrStep(currStep + 1)
                    }}
                    style={styles.button}
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
                style={styles.twoButtonContainer}
            >
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            setCurrStep(currStep - 1)
                        }}
                        style={styles.button}
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
                        style={styles.button}
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
                style={styles.twoButtonContainer}
            >
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            setCurrStep(currStep - 1)
                        }}
                        style={styles.button}
                    >
                        <View>
                            <Text style={{ color: 'white' }}>PREVIOUS</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
            onPress={() => {
             if (checkLastCompleted(userInfo, recipe)) {
              updatePoints(userInfo, recipe)
              navigation.navigate('Success', {
               recipe: recipe,
               userInfo: userInfo,
               points: userInfo.points + 10,
              },
               
              )
              console.log('updatePoints')
             } else {

              navigation.navigate('Success', {
               recipe: recipe,
               userInfo: userInfo,
               points: userInfo.points
              })
             }
            }
                        }
                        style={styles.button}
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

const styles = StyleSheet.create({
    button: {
        // elevation: 12,
        backgroundColor: '#EF233C',
        borderRadius: 10,
        width: 0.4 * Dimensions.get('screen').width,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    oneButtonContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        padding: 10,
    },
    twoButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignContent: 'center',
        padding: 10,
    },
  
})
