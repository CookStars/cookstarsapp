import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    Modal,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { fetchRecipes } from '../redux/actions/recipes'
import badges from '../assets/badges'
import { handleFavorite, checkLastCompleted } from '../utils/helper_functions'
import {badgePoints, colors, weekdays } from '../utils/constants'

export class SuccessPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
        }
        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal() {
        this.setState({ modalVisible: !this.state.modalVisible })
    }
    componentDidMount() {
        const { points } = this.props.route.params

        if (badgePoints.includes(points)) {
            this.toggleModal()
        }
    }

    render() {
        const { navigation, recipes } = this.props
        const { userInfo, points } = this.props.route.params
        const today = new Date().getDay()

        const img = recipes[today + 1].image

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
             <TouchableOpacity 
             style={styles.closeTouchable}
             onPress={()=>
              {console.log('pressed')
              this.setState({modalVisible:false})}}>
                                <Image
                                    source={require('../assets/closeIcon.png')}
                                    style={styles.closeIcon}
                                />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 30, top: -50 }}>
                                Congrats!
                            </Text>
                            <Text style={styles.modalText}>
                                You Unlocked A Badge!
                            </Text>
                            <Image
                                source={badges[points]}
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
                        {checkLastCompleted(userInfo, recipes[today]) ? (
                            <Text style={styles.pointsText}>
                                YOU EARNED 10 PTS
                            </Text>
                        ) : (
                            <Text style={styles.pointsText}>
                                YOU EARNED 0 PTS
                            </Text>
                        )}
                        <Text style={styles.pointsText}>
                            TOTAL POINTS: {points}
                        </Text>
                        <View style={styles.favoriteContainer}>
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
                                    onPress={handleFavorite(userInfo, recipes)}
                                    style={styles.favoriteButton}
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
                                            color={colors.details}
                                        />
                                        <Text
                                            style={{
                                                color: colors.text,
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
    // userInfo: state.user,
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
        backgroundColor: colors.background,
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
    modalText: {
        fontSize: 25,
        top: -45,
        textAlign: 'center',
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
        borderColor: colors.placeHolder,
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
        color: colors.placeHolder,
        fontWeight: 'bold',
    },
    tmrwRecipe: {
        justifyContent: 'flex-end',
    },
    badge: {
        width: 0.35 * Dimensions.get('screen').width,
        height: 0.45 * Dimensions.get('screen').width,
    },
    favoriteContainer: {
        bottom: -20,
        backgroundColor: 'white',
        borderWidth: 1,
    },
    favoriteButton: {
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
    },

    labelContainer: {
        position: 'absolute',
        bottom: '10%',
        height: 40,
        width: 0.75 * Dimensions.get('screen').width,
        borderRadius: 20,
        backgroundColor: colors.details,
        alignSelf: 'center',
    },
    tmrwRecipelabel: {
        opacity: 0.9,
        backgroundColor: 'transparent',
        color: colors.offWhite,
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
        backgroundColor: colors.background,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: colors.placeHolder,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
 badgeImage: {
  borderColor: 'red', 
  borderWidth:3,
        top: 30,
        width: 0.25 * Dimensions.get('screen').width,
        height: 0.25 * Dimensions.get('screen').width,
        resizeMode: 'contain',
    },
    closeTouchable: {
        left: 0.3 * Dimensions.get('screen').width,
        bottom: 0.1 * Dimensions.get('screen').height,
    },

    closeIcon: {
        width: 0.15 * Dimensions.get('screen').width,
        height: 0.15 * Dimensions.get('screen').width,
    },
})
