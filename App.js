import React from 'react';
import AppNavigator from './navigation/AppNavigator.js';
import { config, db } from './firebaseconfig';

export default function App() {
  return <AppNavigator />;
}
