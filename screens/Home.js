import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import { CardView, Cards } from '../components'
import { weekdays } from '../utils/constants'
import { newRecipeNotification } from '../utils/helper_functions'
import { connect } from 'react-redux'
import { fetchRecipes } from '../redux/actions/recipes'
import { colors } from '../utils/constants'

const today = new Date().getDay()
newRecipeNotification()

export class HomeScreen extends Component {
    componentDidMount() {
        const pref = this.props.userInfo.foodPreference
        this.props.getRecipes(pref)
    }

    cards = () => {
        return weekdays.map((weekday, index) => (
            <View style={styles.cards}>
                <Cards
                    // style={{ flexDirection: 'column' }}
                    key={index}
                    day={weekday}
                    navigation={this.props.navigation}
                    recipe={this.props.recipes[index]}
                    userInfo={this.props.userInfo}
                />
            </View>
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
                    <View style={styles.card}>
                        <CardView
                            style={styles.card}
                            day={weekdays[today]}
                            navigation={this.props.navigation}
                            recipes={this.props.recipes}
                            userInfo={this.props.userInfo}
                        />
                    </View>
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
        backgroundColor: '#F4F1DE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollArea_contentContainerStyle: {
        paddingTop: '7%',
        flexWrap: 'wrap',
        alignContent: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
    },
    Text: {
        margin: 10,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10
    },
})
