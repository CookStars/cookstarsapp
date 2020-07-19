import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    Modal,
    Dimensions,
} from 'react-native'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'

import { FontAwesome } from '@expo/vector-icons'

// const getFonts = () => Font.loadAsync({
//     'Raleway_400Regular': require('../assets/fonts/Raleway-ExtraBoldItalic.ttf')
// })

export default function Cards(props) {
    let [fontsLoaded, setFontsLoaded] = useState(false)


    const { day, navigation, recipe, userInfo } = props


    // if (fontsLoaded) {
    return (

        <View style={styles.cardContainer}>
            {recipe ? (
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() =>
                        navigation.navigate('SingleRecipe', {
                            day: day,
                            recipe: recipe,
                            userInfo: userInfo,
                        })
                    }
                >
                    <View style={styles.imgContainer}>
                        <Image
                            source={{
                                uri: recipe.image
                                    ? recipe.image
                                    : 'https://webknox.com/recipeImages/641671-556x370.jpg',
                            }}
                            style={{
                                width: 0.45 * Dimensions.get('screen').width,
                                height: 0.45 * Dimensions.get('screen').width,
                                borderRadius: 30,
                            }}
                        />
                        <View style={styles.labelContainer}>
                            <Text style={styles.recipeOfTheDay}>{day}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ) : (
                    <TouchableOpacity activeOpacity={0.7}>
                        <View style={styles.imgContainer}>
                            <Image
                                source={{
                                    uri:
                                        'https://webknox.com/recipeImages/641671-556x370.jpg',
                                }}
                                style={{
                                    width: 0.45 * Dimensions.get('screen').width,
                                    height: 0.45 * Dimensions.get('screen').width,
                                    borderRadius: 30,
                                }}
                            />
                            <View style={styles.labelContainer}>
                                <Text style={styles.recipeOfTheDay}>{day}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
        </View>
    )
    // } else {
    //     return <AppLoading
    //         startAsync={getFonts}
    //         onFinish={() => setFontsLoaded(true)}
    //     />
    // }
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '50%',
        height: '22%',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    imgContainer: {
        width: 0.5 * Dimensions.get('screen').width,
        height: 0.6 * Dimensions.get('screen').width,
        alignItems: 'center',
    },
    labelContainer: {
        position: 'absolute',
        top: 150,
        height: 37,
        width: 100,
        borderRadius: 15,
        alignSelf: 'center',
        backgroundColor: 'rgba(255,255,255,1)',
    },
    recipeOfTheDay: {
        opacity: 0.9,
        backgroundColor: 'transparent',
        color: 'rgba(35,40,58,1)',
        fontSize: 19,
        marginTop: 7,
        textAlign: 'center',
        fontWeight: 'bold'

    },
})
