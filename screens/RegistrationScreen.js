import { firebase } from '../firebaseconfig'

import React, { useState } from 'react'
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    StyleSheet,
    ActivityIndicator,
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { db } from '../firebaseconfig.js'
import { colors } from '../utils/constants'

export default function RegistrationScreen({ navigation }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [foodPreference, setFoodPreference] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isCreatingAccount, setIsCreatingAccount] = useState(false)

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }
    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert('Please provide the correct credentials')
            return
        }

        setIsCreatingAccount(true)

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async (response) => {
                console.log('USER FROM REGISTRATION', response.user.uid)

                db.collection('users')
                    .doc(response.user.uid)
                    .set({
                        email: response.user.email,
                        firstName: firstName ? firstName : 'Mysterious',
                        lastName: lastName ? lastName : 'Cook',
                        foodPreference: foodPreference
                            ? foodPreference.toString()
                            : 'vegan',
                        points: 0,
                        favoriteRecipes: {},
                        recipeHistory: {},
                        icon: 'default',
                    })
            })
            .catch((error) => {
                alert(error)
            })
            .catch((error) => console.log('ERROR') || alert(error))
            .finally(() => setIsCreatingAccount(false))
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{
                    flex: 1,
                    width: '100%',
                }}
                keyboardShouldPersistTaps="always"
            >
                {/* First Name Input */}
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    placeholderTextColor={colors.placeHolder}
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                {/* Last Name Input */}
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    placeholderTextColor={colors.placeHolder}
                    onChangeText={(text) => setLastName(text)}
                    value={lastName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <Text
                    style={{
                        marginTop: 5,
                        marginBottom: 5,
                        marginLeft: 25,
                        marginRight: 30,
                        paddingLeft: 10,
                    }}
                >
                    Select your food preference:{' '}
                </Text>

                {/* Preference Picker */}
                <DropDownPicker
                    items={[
                        { label: 'Vegan', value: 'vegan' },
                        { label: 'Meatlover', value: 'meatlover' },
                    ]}
                    style={styles.input}
                    defaultValue="vegan"
                    onChangeItem={(itemValue, itemIndex) => {
                        setFoodPreference(itemValue.value)
                    }}
                ></DropDownPicker>

                {/* Email Input */}
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor={colors.placeHolder}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                {/* Password Input */}
                <TextInput
                    style={styles.input}
                    placeholderTextColor={colors.placeHolder}
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={colors.placeHolder}
                    secureTextEntry
                    placeholder="Confirm Password"
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />

                {/* Confirm Button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={onRegisterPress}
                    disabled={isCreatingAccount}
                >
                    {isCreatingAccount ? (
                        <ActivityIndicator size="large"></ActivityIndicator>
                    ) : (
                        <Text style={styles.buttonTitle}>Create account</Text>
                    )}
                </TouchableOpacity>

                <View style={styles.footerView}>
                    <Text style={styles.footerText}>
                        Already got an account?{' '}
                        <Text
                            onPress={onFooterLinkPress}
                            style={styles.footerLink}
                        >
                            Log in
                        </Text>
                    </Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100,
    },
    title: {},
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: 'center',
        margin: 30,
    },
    input: {
        height: 55,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: colors.background,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
    },
    button: {
        backgroundColor: colors.orange,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        color: colors.offWhite,
        fontSize: 16,
        fontWeight: 'bold',
    },
    footerView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    footerText: {
        fontSize: 16,
        color: colors.text,
    },
    footerLink: {
        color: colors.extra,
        fontWeight: 'bold',
        fontSize: 16,
    },
})
