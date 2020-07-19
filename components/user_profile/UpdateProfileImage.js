import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Alert,
    Modal,
} from 'react-native'
import Icons from './Icons'

const UpdateProfileImage = ({
    profileModalVisible,
    setProfileImage,
    setProfileModalVisibility,
    onUpdateProfileImage,
} = {}) => {
    return (
        <Modal
            visible={profileModalVisible}
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
                            setProfileModalVisibility()
                            onUpdateProfileImage()
                        }}
                    >
                        <Text style={styles.textStyle}>Update</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    )
}

export default UpdateProfileImage

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
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
})
