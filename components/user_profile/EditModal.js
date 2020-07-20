import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Alert,
    TextInput,
} from 'react-native'
import Modal from 'react-native-modal'
import { colors } from '../../utils/constants'
import { db, firebase } from '../../firebaseconfig'

const EditModal = ({ setEditModalVisibility, modalVisible, userInfo } = {}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.')
                }}
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: -20,
                    left: -21,
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
                            onChangeText={(text) => setFirstName(text)}
                            value={firstName}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                        />
                        <Text>Last Name:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Last Name"
                            placeholderTextColor={colors.placeHolder}
                            onChangeText={(text) => setLastName(text)}
                            value={lastName}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                        />
                        <Text>Email:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="E-mail"
                            placeholderTextColor={colors.placeHolder}
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            underlineColorAndroid="transparent"
                            autoCapitalize="none"
                        />
                        <TouchableHighlight
                            style={{
                                ...styles.openButton,
                                backgroundColor: colors.buttonCancel,
                            }}
                            onPress={() => {
                                setEditModalVisibility()
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
                                    .doc(userInfo.userId)
                                    .update({
                                        firstName: firstName,
                                        lastName: lastName,
                                        // foodPreference:
                                    })

                                // Update Email
                                var user = firebase.auth().currentUser
                                user.updateEmail(email)
                                    .then(function () {
                                        // Update successful.
                                    })
                                    .catch(function (error) {
                                        console.log(error)
                                    })

                                setEditModalVisibility()
                            }}
                        >
                            <Text style={styles.textStyle}>Confirm</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

            <TouchableHighlight
                style={{ ...styles.openButton, alignSelf: 'center' }}
                onPress={() => {
                    setEditModalVisibility()
                    setFirstName(userInfo.firstName)
                    setLastName(userInfo.lastName)
                    setEmail(userInfo.email)
                }}
            >
                <Text style={styles.textStyle}>Edit Profile</Text>
            </TouchableHighlight>
        </View>
    )
}

export default EditModal

const styles = StyleSheet.create({
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
        padding: 20,
        elevation: 2,
        width: '80%',
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
