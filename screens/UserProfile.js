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
} from 'react-native'
import { connect } from 'react-redux'
import { logOut, update } from '../redux/actions/user'
import { db } from '../firebaseconfig'
import '@firebase/firestore'
import {
    RecipesList,
    Badges,
    UpdateProfileImage,
    EditModal,
} from '../components'
import { colors } from '../utils/constants'
import { profileImages } from '../assets/profileIcons/index'

export class UserProfile extends React.Component {
 state = {
  modalVisible: false,
  profileModalVisible: false,
  profileImage: this.props.userInfo.icon || 'default',
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

    setProfileImage = (profileImage) => this.setState({ profileImage })
    setProfileModalVisibility = () =>
        this.setState({
            profileModalVisible: !this.state.profileModalVisible,
        })
    setEditModalVisibility = () =>
        this.setState({
            modalVisible: !this.state.modalVisible,
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
                                    source={
                                        profileImages[this.state.profileImage]
                                    }
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
                                {user.firstName + ' ' + user.lastName}
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
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'stretch',
                                justifyContent: 'center',
                            }}
                        >
                            <EditModal
                                modalVisible={this.state.modalVisible}
                                setEditModalVisibility={
                                    this.setEditModalVisibility
                                }
                                userInfo={this.props.userInfo}
                            />
                            <View style={styles.buttonParent}>
                                <TouchableHighlight
                                    style={{
                                        ...styles.openButton,
                                        backgroundColor: colors.buttonCancel,
                                        alignSelf: 'center',
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
        backgroundColor: colors.buttonConfirm,
        borderRadius: 20,
        padding: 20,
        elevation: 2,
        width: '80%',
    },
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
        marginTop: 45,
    },
    statsContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    statsBox: {
        alignItems: 'center',
        flex: 1,
    },
    buttonParent: {
        alignSelf: 'center',
        marginTop: 22,
        width: '50%',
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
    textStyle: {
        color: colors.text,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
