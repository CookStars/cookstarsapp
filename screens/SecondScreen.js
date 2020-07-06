import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function SecondScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
      <Button title='Go To Home' onPress={() => navigation.navigate('Home')} />
      <Button title='Go To SingleRecipe' onPress={() => navigation.navigate('SingleRecipe')} />
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
