import React from 'react'
import AppNavigator from './navigation/AppNavigator.js'
import { decode, encode } from 'base-64'
import { YellowBox } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';

if (!global.btoa) {
    global.btoa = encode
}
if (!global.atob) {
    global.atob = decode
}
YellowBox.ignoreWarnings(['Setting a timer'])
YellowBox.ignoreWarnings([
    'Non-serializable values were found in the navigation state',
])

export default function App() {
    return <AppNavigator />
}
