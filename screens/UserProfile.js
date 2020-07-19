import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    ScrollView,
    TouchableHighlight,
    Alert,
    TextInput,
    Modal,
} from 'react-native'
import { connect } from 'react-redux'
import { logOut, update } from '../redux/actions/user'
import { db, firebase } from '../firebaseconfig'
import '@firebase/firestore'
import { RecipesList, Badges, UpdateProfileImage } from '../components'
import { colors } from '../utils/constants'

export class UserProfile extends React.Component {
    state = {
        modalVisible: false,
        profileModalVisible: false,
        profileImage:
            this.props.userInfo.icon.length > 15
                ? this.props.userInfo.icon
                : 'http://192.168.1.154:19001/assets/assets/profileIcons/icons8-test-account-100.png?platform=android&hash=64f6306119855c06b5d5fe9e161127bc?platform=android&dev=true&minify=false&hot=false',
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
                                placeholderTextColor={colors.placeHolder}
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
                                placeholderTextColor={colors.placeHolder}
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
                                placeholderTextColor={colors.placeHolder}
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
                                    backgroundColor: colors.buttonCancel,
                                }}
                                onPress={() => {
                                    this.setState({
                                        modalVisible: !this.state.modalVisible,
                                    })
                                }}
                            >
                                <Text
                                    style={{
                                        ...styles.textStyle,
                                        color: colors.offWhite,
                                    }}
                                >
                                    Cancel
                                </Text>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={{
                                    ...styles.openButton,
                                    top: 15,
                                    backgroundColor: colors.buttonConfirm,
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

    onUpdateProfileImage = async () => {
        await db
            .collection('users')
            .doc(this.props.userInfo.userId)
            .update({
                icon: this.state.profileImage,
            })
            .catch((error) => console.log('ERROR') || alert(error))
        Alert.alert('Your profile icon has been updated')
    }

    setProfileImage = (link) => this.setState({ profileImage: link })
    setProfileModalVisibility = () =>
        this.setState({
            profileModalVisible: !this.state.profileModalVisible,
        })

    render() {
        let user = this.props.userInfo
        return (
            <SafeAreaView style={styles.container}>
                {user.userId ? (
                    <ScrollView showsHorizontalScrollIndicator={false}>
                        <UpdateProfileImage
                            setProfileImage={this.setProfileImage}
                            profileModalVisible={this.state.profileModalVisible}
                            onUpdateProfileImage={this.onUpdateProfileImage}
                            setProfileModalVisibility={
                                this.setProfileModalVisibility
                            }
                        />
                        <View style={styles.profileImage}>
                            <TouchableHighlight
                                style={styles.profileBotton}
                                onPress={() => {
                                    this.setProfileModalVisibility()
                                }}
                            >
                                <Image
                                    source={{ uri: this.state.profileImage }}
                                    style={styles.image}
                                />
                            </TouchableHighlight>
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
                                    { color: colors.placeHolder, fontSize: 14 },
                                ]}
                            >
                                Master Chef
                            </Text>
                            <Text style={styles.points}>
                                Total Points:{user.points}{' '}
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            {this.modal()}
                            <View style={styles.buttonParent}>
                                <TouchableHighlight
                                    style={{
                                        ...styles.openButton,
                                        backgroundColor: colors.buttonCancel,
                                    }}
                                    onPress={() => this.handleClick()}
                                >
                                    <Text style={styles.textStyle}>
                                        Log Out
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <Badges userInfo={this.props.userInfo} />
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
                            <RecipesList
                                userInfo={this.props.userInfo}
                                navigation={this.props.navigation}
                                noItemsText={"You haven't cooked anything yet"}
                                recipes={this.props.userInfo.recipeHistory}
                            />

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
                            <RecipesList
                                userInfo={this.props.userInfo}
                                navigation={this.props.navigation}
                                noItemsText={'No favs selected'}
                                recipes={this.props.userInfo.favoriteRecipes}
                            />
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
        backgroundColor: colors.background,
    },
    text: {
        color: colors.text,
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
        backgroundColor: colors.modal,
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
    openButton: {
        backgroundColor: colors.buttonConfirm,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 200,
    },
    //PROFILE IMAGE STYLING
    //VIEW
    profileImage: {
        top: 50,
        backgroundColor: colors.background,
        height: 100,
        width: 100,
        alignSelf: 'center',
    },
    //TOUCHABLE HIGHLIGHT
    profileBotton: {
        backgroundColor: colors.extra,
        height: 100,
        width: 100,
        alignItems: 'center',
    },
    image: {
        height: 80,
        width: 80,
        alignItems: 'center',
        padding: 5,
        margin: 10,
    },
    textStyle: {
        color: colors.offWhite,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        height: 55,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: colors.background,
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
    buttonContainer: {
        backgroundColor: '#F18F01',
        borderColor: colors.border,
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
        borderColor: colors.borderColor,
        backgroundColor: colors.extra,
        marginTop: 15,
        borderStartWidth: 1,
        borderRadius: 20,
        fontWeight: 'bold',
        overflow: 'visible',
        padding: 10,
        textAlign: 'center',
        width: 200,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    textStyle: {
        color: colors.text,
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
