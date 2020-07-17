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
    Alert,
    TextInput,
    Modal,
} from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { logOut, update } from '../redux/userReducer'
import { db, firebase } from '../firebaseconfig'
import '@firebase/firestore'
import Icons from '../components/Icons'
import profileImages from '../assets/profileIcons/index.js'
import DropDownPicker from 'react-native-dropdown-picker'

export class UserProfile extends React.Component {
    state = {
        modalVisible: false,
        profileModalVisible: false,
        profileImage: this.props.userInfo.icon
            ? this.props.userInfo.icon
            : 'default',
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
            profileImage: this.props.userInfo.icon,
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
                        this.setState({
                            modalVisible: !this.state.modalVisible,
                        })
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

                            <TouchableHighlight
                                style={{
                                    ...styles.openButton,
                                    backgroundColor: '#ff5050',
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
                                    top: 10,
                                    backgroundColor: '#66ff99',
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

    onUpdateProfileImage = async (icon) => {
        await db
            .collection('users')
            .doc(this.props.userInfo.userId)
            .update({
                icon: icon,
            })
            .catch((error) => console.log('ERROR') || alert(error))
    }

    profileModal = () => {
        const setProfileImage = (key) => this.setState({ profileImage: key })
        return (
            <Modal
                // animationType="slide"
                visible={this.state.profileModalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.')
                }}
                transparent={true}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Icons setProfileImage={setProfileImage} />

                        <TouchableHighlight
                            style={{
                                ...styles.openButton,
                                backgroundColor: '#F18F01',
                            }}
                            onPress={() => {
                                this.setState({
                                    profileModalVisible: !this.state
                                        .profileModalVisible,
                                })
                                this.onUpdateProfileImage(
                                    this.state.profileImage
                                )
                            }}
                        >
                            <Text style={styles.textStyle}>Update</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
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
                                style={styles.imageRecipe}
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
                                style={styles.imageRecipe}
                                resizeMode="cover"
                            />
                        </View>
                    </TouchableHighlight>
                ))}
            </ScrollView>
        )
    }

    render() {
        let user = this.props.userInfo
        console.log(this.state.profileImage)
        return (
            <SafeAreaView style={styles.container}>
                {user.userId ? (
                    <ScrollView showsHorizontalScrollIndicator={false}>
                        {this.profileModal()}
                        <View style={{ alignSelf: 'center' }}>
                            <View style={styles.profileImage}>
                                <TouchableHighlight
                                    style={styles.profileBotton}
                                    onPress={() => {
                                        this.setState({
                                            profileModalVisible: !this.state
                                                .profileModalVisible,
                                        })
                                        Alert.alert(
                                            'Your profile icon has been updated'
                                        )
                                    }}
                                >
                                    <Image
                                        source={
                                            profileImages[
                                                this.state.profileImage
                                            ]
                                        }
                                        style={styles.image}
                                        // resizeMode="center"
                                    />
                                </TouchableHighlight>
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
                                style={styles.logOut}
                                onPress={() => this.handleClick()}
                            >
                                <Text style={styles.textStyle}>Log Out</Text>
                            </TouchableHighlight>
                        </View>

                        <View style={styles.statsContainer}>
                            <View style={styles.statsBox}>
                                <Text></Text>
                                <Text
                                    style={{ fontWeight: 'bold', fontSize: 20 }}
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
                                    style={{ fontWeight: 'bold', fontSize: 20 }}
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
    titleBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
        marginHorizontal: 16,
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
        borderRadius: 30,
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
        backgroundColor: '#33ccff',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    logOut: {
        backgroundColor: '#ff5050',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    //PROFILE IMAGE STYLING
    //VIEW
    profileImage: {
        // flex: 1,
        top: 50,
        // width: 150,
        // // height: 50,
        // borderRadius: 100,
        // overflow: 'hidden',
        // alignItems: 'center',
        backgroundColor: 'red',
        // marginTop: 50,
        height: 100,
        width: 100,
    },
    //TOUCHABLE HIGHLIGHT
    profileBotton: {
        backgroundColor: '#F194FF',
        // borderRadius: 20,
        // padding: 10,
        // elevation: 2,
        height: 100,
        width: 100,
        alignItems: 'center',
    },
    //IMAGE
    image: {
        // flex: 1,
        height: 80,
        width: 80,
        alignItems: 'center',
        padding: 5,
        margin: 10,

        // height: 100,
    },
    imageRecipe: {
        flex: 1,
        height: 200,
        width: 200,
        alignItems: 'center',
        // padding: 5,
        // margin: 5,

        // height: 100,
    },
    // openButton: {
    //     width: '100%',
    //     backgroundColor: 'red',
    //     borderRadius: 50,
    //     marginTop: 20,
    //     padding: 10,
    //     elevation: 2,
    // },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

    modalText: {
        marginBottom: 15,
        fontSize: 50,
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
        marginTop: 45,
    },
    statsContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 32,
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
        borderRadius: 12,
        fontWeight: 'bold',
        overflow: 'visible',
        padding: 4,
        textAlign: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    modalView: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 60,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        maxHeight: 500,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        borderRadius: 20,
        fontWeight: 'bold',
        overflow: 'visible',
        padding: 20,
        textAlign: 'center',
    },
})
