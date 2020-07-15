import React, { Component } from 'react'
import HTML from 'react-native-render-html'

import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Button,
    Image,
    Alert,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
export default class SingleRecipe extends Component {
    constructor(props) {
        super(props)
    }

    checkDay() {
        const weekdays = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ]
        const today = weekdays[new Date().getDay()]
        const { navigation } = this.props
        const {
            index,
            recipes,
            userInfo,
            recipeCompleted,
            recipeFinished,
        } = this.props.route.params

        if (weekdays[index] === today && !recipeFinished) {
            return (
                <View style={styles.startButton}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Steps', {
                                index: index,
                                recipes: recipes,
                                userInfo: userInfo,
                                recipeCompleted: recipeCompleted,
                            })
                        }}
                        style={{
                            // elevation: 12,
                            backgroundColor: '#EF233C',
                            borderRadius: 10,
                            width: '100%',
                            height: 35,
                            alignItems: 'center',
                            alignContent: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <View>
                            <Text style={{ color: 'white' }}>START RECIPE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return <View />
        }
    }

    render() {
        const { index, recipes } = this.props.route.params
        const {
            summary,
            title,
            image,
            ingredients,
            readyInMinutes,
            servings,
        } = recipes[index]
        const listIngredients = ingredients
            .map((ingredient) => ingredient.original)
            .join(', ')
        const newTagsSummary = summary
            .split(/\<a\b[^>]*>/)
            .join('<b><i>')
            .split(/\<\/a>/)
            .join('</i></b>')

        return (
            <View>
                <View>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.container}>
                            <View style={styles.image}>
                                <Image
                                    source={{
                                        width: Dimensions.get('screen').width,
                                        height:
                                            0.4 *
                                            Dimensions.get('screen').height,
                                        uri: image,
                                    }}
                                />

                                <TouchableOpacity
                                    onPress={() => {
                                        console.log('favorited')
                                    }}
                                    style={{
                                        backgroundColor: '#EF233C',
                                        position: 'absolute',
                                        top: '85%',
                                        right: -8,
                                        borderRadius: 10,
                                        width: '40%',
                                        height: 35,
                                        alignItems: 'center',
                                        alignSelf: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Feather
                                            name="heart"
                                            size={20}
                                            color="white"
                                        />
                                        <Text
                                            style={{ color: 'white', left: 6 }}
                                        >
                                            FAVORITE
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={styles.title}>{title}</Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'column',
                                    height: '15%',
                                    justifyContent: 'space-evenly',
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        width:
                                            0.8 *
                                            Dimensions.get('screen').width,
                                        justifyContent: 'space-around',
                                        top: '3%',
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            top: '2%',
                                        }}
                                    >
                                        <Feather
                                            name="clock"
                                            size={25}
                                            color="red"
                                            style={{ alignSelf: 'center' }}
                                        />
                                        <Text
                                            style={{
                                                left: '30%',
                                                fontSize: 15,
                                                alignSelf: 'center',
                                            }}
                                        >
                                            {readyInMinutes} minutes
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            top: '2%',
                                        }}
                                    >
                                        <MaterialCommunityIcons
                                            name="bowl"
                                            size={25}
                                            color="red"
                                        />
                                        <Text
                                            style={{
                                                left: '30%',
                                                fontSize: 15,
                                                alignSelf: 'center',
                                            }}
                                        >
                                            {servings} Servings
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View
                            style={{
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                paddingBottom: 130,
                                alignItems: 'center',
                                flex: 6,
                            }}
                        >
                            <View style={styles.description}>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 18,
                                        height: '10%',
                                    }}
                                >
                                    Description:
                                </Text>
                                <HTML
                                    html={newTagsSummary}
                                    baseFontStyle={styles.description}
                                />
                            </View>
                            <View>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 18,
                                        height: 35,
                                        top: '10%',
                                    }}
                                >
                                    Ingredients:
                                </Text>
                                <Text style={styles.ingredients}>
                                    {listIngredients}
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View>
                    <View>{this.checkDay()}</View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },
    container: {
        flex: 10,
        width: Dimensions.get('screen').width,
        height: 0.6 * Dimensions.get('screen').height,
        backgroundColor: 'white',
        alignContent: 'space-between',
    },
    title: {
        left: '6%',
        width: 0.9 * Dimensions.get('screen').width,
        fontSize: 28,
        marginTop: '2%',
        fontWeight: 'bold',
        color: 'black',
    },
    image: {
        borderColor: '#EBEBD3',
        alignItems: 'center',
        resizeMode: 'stretch',
    },
    description: {
        borderColor: '#F78764',
        top: '2%',
        alignSelf: 'center',
        width: 0.88 * Dimensions.get('screen').width,
        fontSize: 15,
        textAlign: 'auto',
    },
    ingredients: {
        top: '10%',
        padding: 3,
        borderWidth: 3,
        borderColor: 'silver',
        alignSelf: 'center',
        width: 0.88 * Dimensions.get('screen').width,
        fontSize: 15,
        textAlign: 'auto',
    },

    startButton: {
        width: '50%',
        height: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
    },
})
