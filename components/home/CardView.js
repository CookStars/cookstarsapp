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

export default function CardView(props) {
    const { navigation, recipes, userInfo, day } = props
    const today = new Date().getDay()

    return (
        <View style={styles.cardContainer}>
            {recipes[today] ? (
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() =>
                        navigation.navigate('SingleRecipe', {
                            day: day,
                            recipe: recipes[today],
                            userInfo: userInfo,
                        })
                    }
                >
                    <View style={styles.imgContainer}>
                        <Image
                            source={{
                                uri: recipes[today].image
                                    ? recipes[today].image
                                    : 'https://webknox.com/recipeImages/641671-556x370.jpg',
                            }}
                            style={{
                                width: Dimensions.get('window').width,
                                height: '125%',
                            }}
                        />
                        <View style={styles.labelContainer}>
                            <Text style={styles.recipeOfTheDay}>
                                Recipe of the Day
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ) : (
                    <TouchableOpacity activeOpacity={0.7}>
                        <View style={styles.imgContainer}></View>
                    </TouchableOpacity>
                )}
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        overflow: 'hidden',
        // borderRadius: 15,
        // width: Dimensions.get('window').width,
        height: 250,
    },
    imgContainer: {
        width: Dimensions.get('window').width,
        height: 205,
    },
    labelContainer: {
        position: 'absolute',
        top: 100,
        left: -20,
        height: 40,
        width: 210,
        borderRadius: 15,
        backgroundColor: colors.offWhite,
    },
    recipeOfTheDay: {
        opacity: 0.9,
        backgroundColor: 'transparent',
        color: colors.text,
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 7,
        marginLeft: 31,
    },
})
