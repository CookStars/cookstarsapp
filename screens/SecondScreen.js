import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function SecondScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
      <Button title='Go To Home' onPress={() => navigation.navigate('Home')} />
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
});
