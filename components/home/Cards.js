import React from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    Modal,
    Dimensions,
} from 'react-native'
import { colors } from '../../utils/constants'

export default function Cards(props) {
    const { day, navigation, recipe, userInfo } = props

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
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '50%',
        height: '22%',
        alignItems: 'center',
    },
    imgContainer: {
        width: 0.5 * Dimensions.get('screen').width,
        height: 0.6 * Dimensions.get('screen').width,
        alignItems: 'center',
    },
    labelContainer: {
        position: 'absolute',
        top: 145,
        height: 37,
        width: '60%',
        borderRadius: 20,
        alignSelf: 'center',
        backgroundColor: colors.offWhite,
    },
    recipeOfTheDay: {
        opacity: 0.9,
        backgroundColor: 'transparent',
        color: colors.text,
        fontSize: 19,
        margin: 5,
        textAlign: 'center',
    },
})
