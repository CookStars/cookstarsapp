import React from 'react';
import AppNavigator from './navigation/AppNavigator.js';
import { decode, encode } from 'base-64';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';

if (!global.btoa) {
    global.btoa = encode
}
if (!global.atob) {
    global.atob = decode
}

YellowBox.ignoreWarnings(['Setting a timer']);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
