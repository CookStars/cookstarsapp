import React from 'react'
import { Input } from 'react-native-elements'
import { StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../../utils/constants'

const FormInput = ({
    iconName,
    iconColor,
    returnKeyType,
    keyboardType,
    name,
    placeholder,
    ...rest
}) => (
    <View style={styles.inputContainer}>
        <Input
            {...rest}
            leftIcon={<Ionicons name={iconName} size={28} color={iconColor} />}
            leftIconContainerStyle={styles.iconStyle}
            placeholderTextColor={colors.placeHolder}
            name={name}
            placeholder={placeholder}
            style={styles.input}
        />
    </View>
)

const styles = StyleSheet.create({
    inputContainer: {
        margin: 15,
    },
    iconStyle: {
        marginRight: 10,
    },
})

export default FormInput
