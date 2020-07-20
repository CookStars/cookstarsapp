import { firebase } from '../firebaseconfig'
import React, { Component, Fragment } from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import { FormInput, FormButton, ErrorMessage } from '../components'
// import ErrorMessage from '../components/ErrorMessage'
import { Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .label('Email')
        .email('Enter a valid email')
        .required('Please enter a registered email'),
})

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)
    }

    handlePasswordReset = ({ email }) => {
        const { navigation } = this.props

        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(function (user) {
                console.log(this.props)
                console.log('success email has been sent')
                navigation.navigate('Login')
            })
            .catch(function (e) {
                console.log(e)
            })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>Forgot Password?</Text>
                <Formik
                    initialValues={{ email: '' }}
                    onSubmit={(values, actions) => {
                        this.handlePasswordReset(values, actions)
                    }}
                    validationSchema={validationSchema}
                >
                    {({
                        handleChange,
                        values,
                        handleSubmit,
                        errors,
                        isValid,
                        touched,
                        handleBlur,
                        isSubmitting,
                    }) => (
                        <Fragment>
                            <FormInput
                                name="email"
                                value={values.email}
                                onChangeText={handleChange('email')}
                                placeholder="Enter email"
                                autoCapitalize="none"
                                iconName="ios-mail"
                                iconColor="#2C384A"
                                onBlur={handleBlur('email')}
                            />
                            <ErrorMessage
                                errorValue={touched.email && errors.email}
                            />
                            <View style={styles.buttonContainer}>
                                <FormButton
                                    buttonType="outline"
                                    onPress={handleSubmit}
                                    title="Send Email"
                                    backgroundColor={colors.orange}
                                    buttonColor={colors.extra}
                                    disabled={!isValid || isSubmitting}
                                />
                            </View>
                            <ErrorMessage errorValue={errors.general} />
                        </Fragment>
                    )}
                </Formik>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 150,
    },
    text: {
        color: '#333',
        fontSize: 24,
        marginLeft: 25,
    },
    buttonContainer: {
        margin: 25,
    },
})
