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
    TouchableOpacity,
    Alert,
    Modal,
} from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { db } from '../firebaseconfig'
import '@firebase/firestore'
import Icons from '../components/Icons'

export default class UserProfile extends React.Component {
    state = { ...this.props.userInfo, modalVisible: false }

    handleClick() {
        this.props.logOut()
    }

    componentDidMount() {
        // Update user profile page with new data
        // Listener function for any changes on the database
        db.collection('users')
            .doc(this.state.userId)
            .onSnapshot((doc) => {
                this.setState(doc.data())
            })
    }

    render() {
        const user = this.props.userInfo
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    <View style={styles.titleBar}>
                        <Ionicons
                            name="ios-arrow-back"
                            size={24}
                            color={'#52575D'}
                        ></Ionicons>
                        <Ionicons
                            name="md-more"
                            size={24}
                            color={'#52575D'}
                        ></Ionicons>
                    </View>

                    <Modal
                        // animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.')
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                {/* <Text style={styles.modalText}>
                                    Hello World!
                                </Text> */}
                                <Icons />

                                <TouchableHighlight
                                    style={{
                                        ...styles.openButton,
                                        backgroundColor: '#F18F01',
                                    }}
                                    onPress={() => {
                                        this.setState({
                                            modalVisible: !this.state
                                                .modalVisible,
                                        })
                                    }}
                                >
                                    <Text style={styles.textStyle}>
                                        Hide Modal
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>

                    <View style={{ alignSelf: 'center' }}>
                        {/* <View style={styles.profileImage}> */}
                        <TouchableHighlight
                            style={styles.openButton}
                            onPress={() => {
                                console.log('blah')
                                this.setState({
                                    modalVisible: !this.state.modelVisible,
                                })
                                // Alert.alert(
                                //     'Your profile icon has been updated'
                                // )
                            }}
                        >
                            <Image
                                source={require('../assets/usericonimages.png')}
                                style={styles.profileImage}
                                resizeMode="center"
                            ></Image>
                        </TouchableHighlight>
                        {/* </View> */}

                        {/* <View style={styles.active}> */}
                    </View>

                    {/* <View style={styles.centeredView}> */}

                    <View style={styles.infoContainer}>
                        <Text
                            style={[
                                styles.text,
                                { fontWeight: '200', fontSize: 36 },
                            ]}
                        >
                            {this.state.email}
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
                            <Text>Favorite Recipes</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 32 }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        >
                            <View style={styles.mediaImageContainer}>
                                <Image
                                    source={require('../assets/Paella.jpg')}
                                    style={styles.image}
                                    resizeMode="cover"
                                ></Image>
                            </View>

                            <View style={styles.mediaImageContainer}>
                                <Image
                                    source={require('../assets/kimchi.jpg')}
                                    style={styles.image}
                                    resizeMode="cover"
                                ></Image>
                            </View>

                            <View style={styles.mediaImageContainer}>
                                <Image
                                    source={require('../assets/Spaghetti.jpg')}
                                    style={styles.image}
                                    resizeMode="cover"
                                ></Image>
                            </View>
                        </ScrollView>
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

                    {/* <Text style={([styles.subtext], styles.recent)}>Recently Cooked</Text>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.recentItem}>
              <View style={styles.recentItemIndicator}></View>
              <View style={{ width: 250 }}>
                <Text style={styles.text}>
                  Cooked Pizza{' '}
                  <Text style={{ fontWeight: '400' }}>Cooked Ramen</Text>
                </Text>
              </View>
            </View>
          </View> */}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

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
        width: 150,
        height: 150,
        borderRadius: 10,
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
        marginTop: 16,
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
        backgroundColor: '#CFFFB0',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        fontSize: 24,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign: 'center',
    },
    buttonParent: {
        alignSelf: 'center',
        marginTop: 30,
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
    openButton: {
        width: '100%',
        backgroundColor: 'red',
        borderRadius: 50,
        marginTop: 20,
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
        textAlign: 'center',
    },
})
