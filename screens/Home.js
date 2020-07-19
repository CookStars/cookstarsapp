import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { CardView, Cards } from '../components'
import { weekdays } from '../utils/constants'
import { newRecipeNotification } from '../utils/helper_functions'
import { connect } from 'react-redux'
import { fetchRecipes } from '../redux/actions/recipes'
import * as Fonts from 'expo-font'
import { AppLoading } from 'expo'

const today = new Date().getDay()
newRecipeNotification()

export class HomeScreen extends Component {


    async componentDidMount() {
        const pref = this.props.userInfo.foodPreference
        this.props.getRecipes(pref)
    }

    cards = () => {
        return weekdays.map((weekday, index) => (
            <Cards
                key={index}
                day={weekday}
                navigation={this.props.navigation}
                recipe={this.props.recipes[index]}
                userInfo={this.props.userInfo}
            />
        ))
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    vertical={true}
                    contentContainerStyle={
                        styles.scrollArea_contentContainerStyle
                    }
                >
                    <CardView
                        style={styles.card}
                        day={weekdays[today]}
                        navigation={this.props.navigation}
                        recipes={this.props.recipes}
                        userInfo={this.props.userInfo}
                    />
                    <Text style={styles.Text}>Recipes of the Week</Text>
                    {this.cards()}
                </ScrollView>
            </View>
        )
    }
}

// Map State + Dispatch
const mapState = (state) => ({
    recipes: state.recipes,
    userInfo: state.user,
})

const mapDispatch = (dispatch) => {
    return {
        getRecipes: (pref) => dispatch(fetchRecipes(pref)),
    }
}

export default connect(mapState, mapDispatch)(HomeScreen)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollArea_contentContainerStyle: {
        paddingTop: '20%',
        paddingBottom: '10%',
        flexWrap: 'wrap',
        alignContent: 'space-around',
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    Text: {
        fontSize: 30,
        // fontFamily: 'Raleway-Black',
        marginBottom: 20,
        fontWeight: 'bold'

    },
})
