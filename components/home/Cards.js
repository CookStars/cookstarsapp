import React from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
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
                                width: Dimensions.get('screen').width,
                                height: 300,
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
                                width: Dimensions.get('screen').width,
                                height: 300,
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
        overflow: 'hidden',
        alignItems: 'center',
    },
    imgContainer: {
        width: Dimensions.get('screen').width,
        height: 200,
        alignItems: 'center',
        paddingBottom: 10,
    },
    labelContainer: {
        position: 'absolute',
        top: 30,
        left: '68%',
        height: 37,
        width: '36%',
        borderRadius: 15,
        opacity: 0.8,
        backgroundColor: colors.offWhite,
    },
    recipeOfTheDay: {
        backgroundColor: 'transparent',
        color: colors.text,
        fontSize: 17,
        fontWeight: 'bold',
        margin: 7,
        textAlign: 'center',
    },
})
