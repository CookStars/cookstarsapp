import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    Button,
    Image,
    Alert,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    ImageBackground,
    Modal,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { db } from '../firebaseconfig'
import { connect } from 'react-redux'
import { fetchRecipes } from '../redux/recipeReducer'
import badges from '../assets/badges'

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

export class SuccessPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
        }
        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal() {
        console.log('huhu',this.state.modalVisible)
        this.setState({ modalVisible: !this.state.modalVisible })
    }
    componentDidMount() {
        const badgePoints = [10, 50, 100, 200, 300, 450]
        const { navigation, recipes, userInfo } = this.props

     if (badgePoints.includes(userInfo.points)) {
      
      this.toggleModal()
         
        }
    }
    render() {
        const { navigation, recipes, userInfo } = this.props
        const today = new Date().getDay()
        const img = recipes[today + 1].image

        const handleFavorite = () => {
            db.collection('users')
                .doc(userInfo.userId)
                .update({
                    favoriteRecipes: {
                        ...userInfo.favoriteRecipes,
                        [recipes[today].id]: recipes[today],
                    },
                })
        }

        console.log(this.state)
        return (
            <View style={styles.container}>
                <View>
                    <Modal
                        transparent={true}
                        visible={this.state.modalVisible}
                        animationType={'fade'}
                        onRequestClose={this.toggleModal}
                    >
                        <View style={styles.modalView}>
                            <TouchableOpacity onPress={this.toggleModal}>
                                <Image
                                    source={require('../assets/closeIcon.png')}
                                    style={styles.closeIcon}
                                />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 30, top: -50 }}>
                                {' '}
                                Congrats!{' '}
                            </Text>
                            <Text style={{ fontSize: 25, top: -45 }}>
                                You Unlocked A Badge!
                            </Text>
                            <Image
                                source={badges[userInfo.points]}
                                style={styles.badgeImage}
                            />
                        </View>
                    </Modal>
                </View>
                <View style={styles.image}>
                    <Image
                        source={require('../assets/banner.png')}
                        style={styles.banner}
                    />
                    <Image
                        source={require('../assets/avocadodance.jpg')}
                        style={styles.avocadoImg}
                    />
                </View>
                <View style={styles.pointsContainer}>
                    <View>
                        <Image
                            source={require('../assets/congratsBadge.png')}
                            style={styles.badge}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.pointsText}>
                            YOU EARNED 10 PTS!
                        </Text>
                        <Text style={styles.pointsText}>
                            TOTAL POINTS: {userInfo.points}
                        </Text>
                        <View
                            style={{
                                bottom: -20,
                                backgroundColor: 'white',
                                borderWidth: 1,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 17,
                                    paddingBottom: 3,
                                }}
                            >
                                Enjoyed the recipe?
                            </Text>
                            <View>
                                <TouchableOpacity
                                    onPress={handleFavorite}
                                    style={{
                                        borderWidth: 1,
                                        borderColor: '#EF233C',
                                        backgroundColor: 'transparent',
                                        bottom: -2,
                                        right: -8,
                                        borderRadius: 10,
                                        width: '80%',
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
                                            color="#EF233C"
                                        />
                                        <Text
                                            style={{
                                                color: 'black',
                                                left: 6,
                                            }}
                                        >
                                            ADD FAVORITE
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.tmrwRecipe}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() =>
                            navigation.navigate('SingleRecipe', {
                                recipe: recipes[today + 1],
                                day: weekdays[today + 1],
                            })
                        }
                    >
                        <Image
                            source={{ uri: img }}
                            style={{
                                width: Dimensions.get('screen').width,
                                height: 0.33 * Dimensions.get('screen').height,
                                bottom: 0,
                            }}
                        />
                        <View style={styles.labelContainer}>
                            <Text style={styles.tmrwRecipelabel}>
                                Check Out Tomorrow's Recipe
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
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

export default connect(mapState, mapDispatch)(SuccessPage)

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'column',
        alignContent: 'space-between',
        paddingTop: '8%',
        width: Dimensions.get('screen').width,
    },
    modalContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: Dimensions.get('screen').width,
        height: 0.3 * Dimensions.get('screen').height,
        alignItems: 'center',
    },
    banner: {
        width: Dimensions.get('screen').width,
        height: '50%',
        resizeMode: 'cover',
    },
    avocadoImg: {
        width: '100%',
        height: '60%',
        resizeMode: 'contain',
        paddingBottom: '10%',
    },
    pointsContainer: {
        borderWidth: 2,
        borderColor: 'grey',
        flexDirection: 'row',
        alignContent: 'center',
        width: 0.95 * Dimensions.get('screen').width,
        justifyContent: 'space-evenly',
    },
    textContainer: {
        justifyContent: 'center',
    },
    pointsText: {
        alignSelf: 'center',
        fontSize: 18,
        paddingVertical: 10,
        color: 'grey',
        fontWeight: 'bold',
    },
    tmrwRecipe: {
        justifyContent: 'flex-end',
    },
    badge: {
        width: 0.35 * Dimensions.get('screen').width,
        height: 0.45 * Dimensions.get('screen').width,
    },

    labelContainer: {
        position: 'absolute',
        bottom: '3%',
        height: 40,
        width: 0.75 * Dimensions.get('screen').width,
        borderRadius: 15,
        backgroundColor: '#EF233C',
        alignSelf: 'center',
    },
    tmrwRecipelabel: {
        opacity: 0.9,
        backgroundColor: 'transparent',
        color: 'white',
        alignSelf: 'center',
        fontSize: 18,
        marginTop: 7,
    },
    modalView: {
        top: 0.25 * Dimensions.get('screen').height,
        left: 0.1 * Dimensions.get('screen').width,
        width: 0.8 * Dimensions.get('screen').width,
        height: 0.5 * Dimensions.get('screen').height,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    badgeImage: {
        top: 30,
        width: 0.25 * Dimensions.get('screen').width,
        height: 0.25 * Dimensions.get('screen').width,
        resizeMode: 'contain',
    },
    closeIcon: {
        width: 0.13 * Dimensions.get('screen').width,
        height: 0.13 * Dimensions.get('screen').width,
        bottom: 0.1 * Dimensions.get('screen').height,
        left: 0.3 * Dimensions.get('screen').width,
    },
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//     backgroundColor: '#000',
//     alignItems: 'center',
//     width: '100%',
//   },
//   h1: {
//     color: '#008F68',
//     fontSize: 40,
//   },
//   h2: {
//     color: '#FAE042',
//     fontSize: 18,
//     marginTop: 8,
//   },
// image: {
//   width: 300,
//   height: 260,
//   justifyContent: 'center',
// },
// buttonContainer: {
//   backgroundColor: '#008F68',
//   borderRadius: 5,
//   padding: 8,
//   margin: 8,
// },
// topContainer: {
//   flex: 2,
//   justifyContent: 'center',
//   alignItems: 'center',
// },
// middleContainer: {
//   flex: 3,
//   justifyContent: 'flex-start',
//   alignItems: 'center',
// },
// bottomContainer: {
//   justifyContent: 'flex-end',
//   width: '90%',
//   margin: 20,
//   padding: 10,
// },
// });
