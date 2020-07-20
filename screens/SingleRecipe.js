import React, { Component } from 'react'
import HTML from 'react-native-render-html'
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Image,
    SafeAreaView,
    Dimensions,
} from 'react-native'
import { ListItem } from 'react-native-elements'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import checkDay from '../components/single_recipe/CheckDay'
import favoriteButton from '../components/single_recipe/favoriteButton'
import { colors } from '../utils/constants'

export default class SingleRecipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fave: true,
        }
    }

    render() {
        // const { recipe, userInfo } = this.props.route.params
        const {
            summary,
            title,
            image,
            ingredients,
            readyInMinutes,
            servings,
        } = this.props.route.params.recipe
        const listIngredients = ingredients.map((ingredient, index) => {
            const originalIngredDesc = ingredient.original
            return <ListItem key={index} title={originalIngredDesc} />
        })

        let newTagsSummary = summary
            .split(/\<a\b[^>]*>/)
            .join('<b><i>')
            .split(/\<\/a>/)
            .join('</i></b>')

        const removeExtraSummary = newTagsSummary
            .split('.')
            .map((substr, index) => {
                if (
                    substr.search(
                        /(brought\ to\ you|foodista|spoonacular|recipe\ from)/
                    ) > 0
                ) {
                    return index
                }
            })
        const indexExtraSummary = removeExtraSummary.find(
            (str) => str !== undefined
        )
        newTagsSummary =
            newTagsSummary.split('.').slice(0, indexExtraSummary).join('.') +
            '.'

        return (
            <SafeAreaView>
                <View>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.topContainer}>
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
                                {favoriteButton(this.props.route.params)}
                            </View>
                            <View>
                                <Text style={styles.title}>{title}</Text>
                            </View>
                            <View style={styles.descIconOuterContainer}>
                                <View style={styles.descIconInnerContainer}>
                                    <View style={styles.descIcons}>
                                        <Feather
                                            name="clock"
                                            size={25}
                                            color={colors.details}
                                            style={{ alignSelf: 'center' }}
                                        />
                                        <Text style={styles.descIconText}>
                                            {readyInMinutes} minutes
                                        </Text>
                                    </View>
                                    <View style={styles.descIcons}>
                                        <MaterialCommunityIcons
                                            name="bowl"
                                            size={25}
                                            color={colors.details}
                                        />
                                        <Text style={styles.descIconText}>
                                            {servings} Servings
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.detailsContainer}>
                            <View style={styles.descriptionContainer}>
                                <View>
                                    <Text style={styles.descTitle}>
                                        Description:
                                    </Text>
                                    <HTML
                                        html={newTagsSummary}
                                        baseFontStyle={styles.descriptionText}
                                    />
                                </View>
                            </View>
                            <View style={styles.ingredientsContainer}>
                                <Text style={styles.ingredientsTitle}>
                                    Ingredients:
                                </Text>
                                <View style={styles.ingredients}>
                                    {listIngredients}
                                </View>
                            </View>
                        </View>
                        
           </ScrollView>
           <View>
                            <View>{checkDay(this.props)}</View>
                        </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: colors.background,
    },
    topContainer: {
        width: Dimensions.get('screen').width,
        backgroundColor: colors.background,
        alignContent: 'space-between',
        borderColor: 'red',
        flexDirection: 'column',
        color: colors.text,
    },
    image: {
        alignItems: 'center',
        resizeMode: 'stretch',
    },
    title: {
        left: '6%',
        width: 0.9 * Dimensions.get('screen').width,
        fontSize: 28,
        marginTop: '2%',
        fontWeight: 'bold',
        color: 'black',
        paddingBottom: 10,
    },
    descIcons: { flexDirection: 'row', top: '2%' },
    descIconText: {
        left: '30%',
        fontSize: 15,
        alignSelf: 'center',
    },
    descIconInnerContainer: {
        flexDirection: 'row',
        width: 0.8 * Dimensions.get('screen').width,
        justifyContent: 'space-around',
        // alignSelf: 'center',
    },
    descIconOuterContainer: {
        flexDirection: 'column',
        paddingTop: 0.03 * Dimensions.get('screen').height,
        justifyContent: 'space-evenly',
    },
    detailsContainer: {
        borderColor: 'green',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 0.05 * Dimensions.get('screen').height,
        paddingBottom: 0.1 * Dimensions.get('screen').height,
        alignItems: 'center',
    },
    descriptionContainer: {
        top: 0.05 * Dimensions.get('screen').height,
        borderColor: 'violet',
        flexDirection: 'column',
        width: 0.85 * Dimensions.get('screen').width,
        paddingBottom: 0.1 * Dimensions.get('screen').height,
    },
    descTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        bottom: 30,
    },
    descriptionText: {
        textAlign: 'auto',
        fontSize: 15,
        lineHeight: 25,
        alignSelf: 'center',
        justifyContent: 'center',
        paddingBottom: 40,
    },

    ingredients: {
        borderWidth: 3,
        borderColor: colors.ingredientsBorder,
        alignSelf: 'center',
        width: 0.88 * Dimensions.get('screen').width,
        fontSize: 15,
        textAlign: 'auto',
    },
    ingredientsTitle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
})
