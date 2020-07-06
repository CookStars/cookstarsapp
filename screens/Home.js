import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import favicon from '../assets/favicon.png';
import CardView from '../components/CardView';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <CardView style={styles.card} />
      <Text>Recipes of the Week</Text>
      <ScrollView
        contentContainerStyle={styles.scrollArea_contentContainerStyle}
      >
        {/* <CardView style={styles.card} />
        <CardView style={styles.card} />
        <CardView style={styles.card} />
        <CardView style={styles.card} /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollArea_contentContainerStyle: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
});
