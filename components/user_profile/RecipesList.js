import React from 'react'
import {
    Text,
    View,
    Image,
    ScrollView,
    TouchableHighlight,
    StyleSheet,
} from 'react-native'

const RecipesList = ({ userInfo, navigation, recipes, noItemsText } = {}) => {
    if (!recipes || !Object.keys(recipes).length) {
        return (
            <View style={styles.statsBox}>
                <Text>{noItemsText}</Text>
            </View>
        )
    }

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {Object.entries(recipes).map((item, index) => (
                <TouchableHighlight
                    key={index}
                    onPress={() =>
                        navigation.navigate('SingleRecipe', {
                            recipe: item[1],
                            userInfo,
                        })
                    }
                >
                    <View style={styles.mediaImageContainer}>
                        <Image
                            source={{
                                uri: item[1].image,
                            }}
                            style={styles.imageRecipe}
                            resizeMode="cover"
                        />
                    </View>
                </TouchableHighlight>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageRecipe: {
        flex: 1,
        height: 200,
        width: 200,
        alignItems: 'center',
    },
    statsBox: {
        alignItems: 'center',
        flex: 1,
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: 'hidden',
        marginHorizontal: 10,
    },
})

export default RecipesList
