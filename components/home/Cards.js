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
    },
})
