import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native'

import { updatePoints } from '../../utils/helper_functions'

export default function (currStep, setCurrStep, recipe, navigation, userInfo) {
    const currRecipeSteps = recipe.analyzedInstructions[0].steps

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
                            updatePoints(userInfo, recipe)
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

const styles = StyleSheet.create({})
