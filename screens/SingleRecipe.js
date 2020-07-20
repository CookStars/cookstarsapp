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

        const newTagsSummary = summary
            .split(/\<a\b[^>]*>/)
            .join('<b><i>')
            .split(/\<\/a>/)
            .join('</i></b>')

        return (
            <SafeAreaView>
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
                                            color="red"
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
                                            color="red"
                                        />
                                        <Text style={styles.descIconText}>
                                            {servings} Servings
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.detailsContainer}>
                            <View style={styles.description}>
                                <Text style={styles.descTitle}>Description:</Text>
                                <HTML
                                    html={newTagsSummary}
                                    baseFontStyle={styles.description}
                                />
                            </View>
                            <View>
                                <Text style={styles.ingredientsTitle}>
                                    Ingredients:
                                </Text>
                                <View style={styles.ingredients}>
                                    {listIngredients}
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View>
                    <View>{checkDay(this.props)}</View>
                </View>
            </SafeAreaView>
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
        height: 0.57 * Dimensions.get('screen').height,
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
        // top: '2%',
        alignSelf: 'center',
        width: 0.88 * Dimensions.get('screen').width,
        fontSize: 15,
        textAlign: 'auto',
    },
    descTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        height: '10%',
    },
    ingredients: {
        top: 50,
        borderWidth: 3,
        borderColor: 'silver',
        alignSelf: 'center',
        width: 0.88 * Dimensions.get('screen').width,
        fontSize: 15,
        textAlign: 'auto',
    },
    ingredientsTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        // height: '3%',
        top: '3%',
    },
    descIcons: { flexDirection: 'row', top: '2%' },
    descIconText: { left: '30%', fontSize: 15, alignSelf: 'center' },
    descIconInnerContainer: {
        flexDirection: 'row',
        width: 0.8 * Dimensions.get('screen').width,
        justifyContent: 'space-around',
        // top: '3%',
    },
    descIconOuterContainer: {
        flexDirection: 'column',
        height: '12.5%',
        justifyContent: 'space-evenly',
    },
    detailsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 0.25 * Dimensions.get('screen').height,
        alignItems: 'center',
        flex: 6,
    },
})
