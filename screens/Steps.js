import React, { useState } from 'react'
import { StyleSheet, Text, ScrollView, View, Dimensions } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
    checkStep,
    checkEquipment,
    checkIngredients,
} from '../components/steps'
import { colors } from '../utils/constants'

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
                        color: colors.red,
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
                <View style={styles.listContainer}>
                    {checkEquipment(equipment)}
                </View>
                <View style={styles.listContainer}>
                    {checkIngredients(ingredients)}
                </View>
                <View style={{ height: '38%' }}>
                    <ScrollView>
                        <Text
                            style={{
                                fontSize: 24,
                                color: colors.placeHolder,
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
                <View style={styles.listContainer}>
                    {checkStep(
                        currStep,
                        setCurrStep,
                        recipe,
                        navigation,
                        userInfo
                    )}
                </View>
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        backgroundColor: colors.offWhite,
    },
    listContainer: {
        height: '31%',
        flexDirection: 'column',
    },
})
