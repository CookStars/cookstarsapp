import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView,
    Image,
    ScrollView,
    TouchableHighlight,
    TextInput,
    Picker,
    Modal,
    Dimensions,
} from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { logOut, update } from '../redux/userReducer'
import { db, firebase } from '../firebaseconfig'
import '@firebase/firestore'
import badges from '../assets/badges/index'
export class UserProfile extends React.Component {
    state = {
        modalVisible: false,
    }

    handleClick() {
        this.props.logUserOut()
    }

    componentDidMount() {
        // listener to update any user information across screens
        db.collection('users')
            .doc(this.props.userInfo.userId)
            .onSnapshot((doc) => {
                this.props.updateInfo(doc.data())
            })

        this.setState({
            firstName: this.props.userInfo.firstName,
            lastName: this.props.userInfo.lastName,
            email: this.props.userInfo.email,
            foodPreference: this.props.userInfo.foodPreference,
        })
    }

    modal = () => {
        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.')
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>
                                Edit Your Profile Info
                            </Text>

                            <Text>First Name:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="First Name"
                                placeholderTextColor="#aaaaaa"
                                onChangeText={(text) =>
                                    this.setState({ firstName: text })
                                }
                                value={this.state.firstName}
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                            />
                            <Text>Last Name:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Last Name"
                                placeholderTextColor="#aaaaaa"
                                onChangeText={(text) =>
                                    this.setState({ lastName: text })
                                }
                                value={this.state.lastName}
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                            />
                            <Text>Email:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="E-mail"
                                placeholderTextColor="#aaaaaa"
                                onChangeText={(text) =>
                                    this.setState({ email: text })
                                }
                                value={this.state.email}
                                underlineColorAndroid="transparent"
                                autoCapitalize="none"
                            />

                            {/* <Picker
                                style={styles.input}
                                placeholder="Food Preference"
                                placeholderTextColor="#aaaaaa"
                                // selectedValue={foodPreference}
                                value="vegan"
                                // onValueChange={(itemValue, itemIndex) =>
                                //     setFoodPreference(itemValue)
                                // }
                            >
                                <Picker.Item label="Vegan" value="vegan" />
                                <Picker.Item
                                    label="Meatlover"
                                    value="meatlover"
                                />
                            </Picker> */}

                            <TouchableHighlight
                                style={{
                                    ...styles.openButton,
                                    backgroundColor: '#2196F3',
                                }}
                                onPress={() => {
                                    this.setState({
                                        modalVisible: !this.state.modalVisible,
                                    })
                                }}
                            >
                                <Text style={styles.textStyle}>Cancel</Text>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={{
                                    ...styles.openButton,
                                    top: 15,
                                    backgroundColor: '#2196F3',
                                }}
                                onPress={async () => {
                                    await db
                                        .collection('users')
                                        .doc(this.props.userInfo.userId)
                                        .update({
                                            firstName: this.state.firstName,
                                            lastName: this.state.lastName,
                                            // foodPreference:
                                        })

                                    // Update Email
                                    var user = firebase.auth().currentUser
                                    user.updateEmail(this.state.email)
                                        .then(function () {
                                            // Update successful.
                                        })
                                        .catch(function (error) {
                                            console.log(error)
                                        })

                                    this.setState({
                                        modalVisible: !this.state.modalVisible,
                                    })
                                }}
                            >
                                <Text style={styles.textStyle}>Confirm</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    style={styles.openButton}
                    onPress={() => {
                        this.setState({
                            modalVisible: !this.state.modalVisible,
                            firstName: this.props.userInfo.firstName,
                            lastName: this.props.userInfo.lastName,
                            email: this.props.userInfo.email,
                        })
                    }}
                >
                    <Text style={styles.textStyle}>Edit Profile</Text>
                </TouchableHighlight>
            </View>
        )
    }

    history = () => {
        const recipeHistory = this.props.userInfo.recipeHistory
        if (!recipeHistory || !Object.keys(recipeHistory).length) {
            return (
                <View style={styles.statsBox}>
                    <Text>No favs selected</Text>
                </View>
            )
        }
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                // style={{ flex: 1, flexDirection: 'row' }}
            >
                {Object.entries(recipeHistory).map((item, index) => (
                    <TouchableHighlight
                        key={index}
                        onPress={() =>
                            this.props.navigation.navigate('SingleRecipe', {
                                // day: day,
                                recipe: item[1],
                                userInfo: this.props.userInfo,
                            })
                        }
                    >
                        <View style={styles.mediaImageContainer}>
                            <Image
                                source={{
                                    uri: item[1].image,
                                }}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                    </TouchableHighlight>
                ))}
            </ScrollView>
        )
    }

    favorites = () => {
        const favoriteRecipes = this.props.userInfo.favoriteRecipes
        if (!favoriteRecipes || !Object.keys(favoriteRecipes).length) {
            return (
                <View style={styles.statsBox}>
                    <Text>No favs selected</Text>
                </View>
            )
        }

        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {Object.entries(favoriteRecipes).map((item, index) => (
                    <TouchableHighlight
                        key={index}
                        onPress={() =>
                            this.props.navigation.navigate('SingleRecipe', {
                                // day: day,
                                recipe: item[1],
                                userInfo: this.props.userInfo,
                            })
                        }
                    >
                        <View style={styles.mediaImageContainer}>
                            <Image
                                source={{
                                    uri: item[1].image,
                                }}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </View>
                    </TouchableHighlight>
                ))}
            </ScrollView>
        )
    }
    showBadges = () => {
        const badgeIds = Object.keys(badges).sort((a, b) => a - b)
        const userPoints = this.props.userInfo.points
        console.log(badgeIds)
        const findPoints = badgeIds.filter(points => points > userPoints)
        console.log('found', findPoints)
     const pointsLeft = () => {
      if (findPoints.length) {
          return findPoints[0]-userPoints
         }
         else return 0
        }
        const listBadges = badgeIds.map((badgeId) => {
            return (
                <View
                    key={badgeId}
                    style={{ paddingBottom: '4%', paddingHorizontal: '4%' }}
                >
                    {badgeId <= userPoints ? (
                        <Image
                            source={badges[badgeId]}
                            style={{
                                alignSelf: 'center',
                                width: 0.2 * Dimensions.get('screen').width,
                                height: 0.2 * Dimensions.get('screen').width
                                // bottom: '10%'
                            }}
                        />
                    ) : (
                        <Image
                            source={badges[badgeId]}
                            style={{
                                tintColor: 'grey',
                                opacity: 0.2,
                                width: 0.2 * Dimensions.get('screen').width,
                                height: 0.2 * Dimensions.get('screen').width,
                                resizeMode: 'contain',
                                // borderWidth: 1,
                                // bottom: '10%',
                            }}
                        />
                    )}
                </View>
            )
        })

        return (
            <View style={{ paddingVertical: '10%' }}>
                <Text
                    style={{
                        fontSize: 20,
                        alignSelf: 'center',
                        paddingBottom: '3%',
                        fontWeight:'bold'
                    }}
                >
                    BADGES
                </Text>

                <View
                    style={{
                        borderWidth: 2,
                        width: 0.9 * Dimensions.get('screen').width,
                        height: 0.3 * Dimensions.get('screen').height,
                        alignSelf: 'center',
                        justifyContent: 'flex-start',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        padding: '4%',
                        alignContent: 'space-around',
                    }}
                >
                    {listBadges}
                </View>
                <Text
                    style={{
                        fontSize: 19,
                        paddingTop: '5%',
                        left: '40%',
                        color: 'violet',
                    }}
                >
                    {pointsLeft()} Points To Next Badge
                </Text>
            </View>
        )
    }

    render() {
        let user = this.props.userInfo
        return (
            <SafeAreaView style={styles.container}>
                {user.userId ? (
                    <ScrollView showsHorizontalScrollIndicator={false}>
                        <View style={{ alignSelf: 'center' }}>
                            <View style={styles.profileImage}>
                                <Image
                                    source={require('../assets/usericonimages.png')}
                                    style={styles.image}
                                    resizeMode="center"
                                />
                            </View>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text
                                style={[
                                    styles.text,
                                    { fontWeight: 'bold', fontSize: 50 },
                                ]}
                            >
                                {user.firstName
                                    ? user.firstName + ' ' + user.lastName
                                    : ' '}
                            </Text>
                            <Text
                                style={[
                                    styles.text,
                                    { color: '#AEB5BC', fontSize: 14 },
                                ]}
                            >
                                Master Chef
                            </Text>
                            <Text style={styles.points}>
                                Total Points:{user.points}{' '}
                            </Text>
                        </View>

                        {this.modal()}
                        <View style={styles.buttonParent}>
                            <TouchableHighlight
                                style={styles.openButton}
                                onPress={() => this.handleClick()}
                            >
                                <Text style={styles.textStyle}>Log Out</Text>
                            </TouchableHighlight>
                        </View>
                        {this.showBadges()}
                        <View style={styles.statsContainer}>
                            <View style={styles.statsBox}>
                                <Text></Text>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 20,
                                    }}
                                >
                                    HISTORY
                                </Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 32 }}>
                            {this.history()}

                            <View style={styles.mediaCount}>
                                <Text style={styles.text}></Text>
                            </View>
                        </View>

                        <View style={styles.statsContainer}>
                            <View style={styles.statsBox}>
                                <Text></Text>
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 20,
                                    }}
                                >
                                    FAVORITES
                                </Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 32 }}>
                            {this.favorites()}
                            <View style={styles.mediaCount}>
                                <Text style={styles.text}></Text>
                            </View>
                        </View>
                    </ScrollView>
                ) : (
                    <View></View>
                )}
            </SafeAreaView>
        )
    }
}

// Map State + Dispatch
const mapState = (state) => ({
    userInfo: state.user,
})

const mapDispatch = (dispatch) => {
    return {
        updateInfo: (data) => dispatch(update(data)),
        logUserOut: () => dispatch(logOut()),
    }
}

export default connect(mapState, mapDispatch)(UserProfile)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        // fontFamily: 'HelveticaNeue',
        color: '#52575D',
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
    },
    titleBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
        marginHorizontal: 16,
    },
    profileImage: {
        top: 50,
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
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
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    active: {
        backgroundColor: '#34FFB9',
        position: 'absolute',
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10,
    },
    add: {
        backgroundColor: '#41444B',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 55,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center',
        width: 300,
    },
    infoContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        // marginTop: 2,
    },
    statsContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 15,
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
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10,
    },
    recentItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    recentItemIndicator: {
        backgroundColor: '#CABFAB',
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 20,
    },
    buttonContainer: {
        backgroundColor: '#F18F01',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        fontSize: 24,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 20,
        textAlign: 'center',
    },
    buttonParent: {
        alignSelf: 'center',
        marginTop: 10,
    },
    points: {
        borderColor: 'white',
        backgroundColor: '#F6E27F',
        marginTop: 15,
        borderStartWidth: 1,
        borderRadius: 20,
        fontWeight: 'bold',
        overflow: 'visible',
        padding: 20,
        textAlign: 'center',
    },
})
