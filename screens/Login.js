import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    ActivityIndicator,
    Image,
    Alert,
} from 'react-native'
import { firebase } from '../firebaseconfig'
import 'firebase/functions'
import { colors } from '../utils/constants'

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        errorMessage: null,
        loggingIn: false,
    }

    onClickListener = (viewId) => {
        Alert.alert('Alert', 'Button pressed ' + viewId)
        return viewId
    }

    handleLogin = async () => {
        const { email, password } = this.state
        this.setState({ loggingIn: true })

        // Set persistence locally. This will make sure user is logged in through firebase until they log out
        await firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                return firebase
                    .auth()
                    .signInWithEmailAndPassword(email, password)
            })
            .catch((error) => {
                // Handle Errors here.
                this.setState({ loggingIn: false })
                this.setState({ errorMessage: error.message })
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.welcomeContainer}>
                    <Image
                        source={require('../assets/cookstarslogo.png')}
                        style={styles.welcomeImage}
                    />
                </View>
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && (
                        <Text style={styles.error}>
                            {this.state.errorMessage}
                        </Text>
                    )}
                </View>

                {/* Email Field */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid="transparent"
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email}
                        id="emailInput"
                    />
                </View>

                {/* Password Field */}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry
                        underlineColorAndroid="transparent"
                        onChangeText={(password) => this.setState({ password })}
                        value={this.state.password}
                    />
                </View>

                {/* Login Button */}
                <TouchableHighlight
                    style={[styles.buttonContainer, styles.loginButton]}
                    onPress={() => this.handleLogin()}
                >
                    {this.state.loggingIn ? (
                        <ActivityIndicator size="large"></ActivityIndicator>
                    ) : (
                            <Text style={styles.loginText}>Login</Text>
                        )}
                </TouchableHighlight>

                {/* Forgot password Button */}
                <TouchableHighlight
                    style={styles.buttonContainer}
                    onPress={() =>
                        this.props.navigation.navigate('ForgotPassword')
                    }
                >
                    <Text>Forgot your password?</Text>
                </TouchableHighlight>

                {/* Register Button */}
                <TouchableHighlight
                    style={styles.buttonContainer}
                    onPress={() =>
                        this.props.navigation.navigate('Registration')
                    }
                >
                    <Text>Register</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.offWhite,
    },
    inputContainer: {
        borderBottomColor: colors.offWhite,
        backgroundColor: colors.background,
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: colors.offWhite,
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center',
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: colors.orange,
    },
    loginText: {
        color: colors.offWhite,
        fontWeight: 'bold',
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 300,
        height: 250,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
})
