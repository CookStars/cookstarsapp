import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { firebase } from '../firebaseconfig';
import 'firebase/functions';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: null,
  };

  onClickListener = (viewId) => {
    Alert.alert('Alert', 'Button pressed ' + viewId);
    // this.props.navigation.navigate("UserPage");
  };

  handleLogin = async () => {
    const { email, password } = this.state;
    // await firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((response) => {
    //     const uid = response.user.uid;
    //     this.props.navigation.navigate('TabNav');
    //   })
    //   .catch((error) => this.setState({ errorMessage: error.message }));
    var hello = firebase.functions().httpsCallable('katya');
    await hello({ message: 'hello' }).then((result) => {
      var hi = result.data.hello;
      this.onClickListener(hi);
    });
  };
  //
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          {/*
          ADD LOGO HERE
          <Image
            source={require("../assets/images/logo_actory.png")}
            style={styles.welcomeImage}
          /> */}
        </View>
        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>

        {/* Email Field */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder='Email'
            keyboardType='email-address'
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
          />
        </View>

        {/* Password Field */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder='Password'
            secureTextEntry
            underlineColorAndroid='transparent'
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
        </View>

        {/* Login Button */}
        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.handleLogin()}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        {/* Forgot password Button */}
        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => this.onClickListener('restore_password')}
        >
          <Text>Forgot your password?</Text>
        </TouchableHighlight>

        {/* Register Button */}
        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => this.onClickListener('register')}
        >
          <Text>Register</Text>
        </TouchableHighlight>
        <ActivityIndicator size='large'></ActivityIndicator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F1DE',
  },
  inputContainer: {
    borderBottomColor: '#F2CC8F',
    backgroundColor: '#FFFFFF',
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
    borderBottomColor: '#F2CC8F',
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
    backgroundColor: '#F18F01',
  },
  loginText: {
    color: 'white',
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
});
