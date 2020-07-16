import React, { useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView,
    Image,
    ScrollView,
    TouchableHighlight,
} from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { logOut, update } from '../redux/userReducer'
import { db } from '../firebaseconfig'
import '@firebase/firestore'

export class UserProfile extends React.Component {
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
                        onPress={() => console.log('hi')}
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
                        onPress={() => console.log('hi')}
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
                                    { fontWeight: '200', fontSize: 50 },
                                ]}
                            >
                                {user.firstName}
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

                        <View style={styles.buttonParent}>
                            <TouchableHighlight
                                style={styles.buttonContainer}
                                onPress={() => this.handleClick()}
                            >
                                <Text>Log Out</Text>
                            </TouchableHighlight>
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
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 80,
        overflow: 'hidden',
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
