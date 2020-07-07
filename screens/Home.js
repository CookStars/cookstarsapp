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
import Cards from '../components/Cards';
import {recipes} from '../Seed'

export default function HomeScreen({ navigation}) {
  const days = {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday'
  };
  return (
    <View style={styles.container}>
      <CardView style={styles.card} />
      <Text style={styles.Text}>Recipes of the Week</Text>
      <ScrollView
        vertical={true}
        contentContainerStyle={styles.scrollArea_contentContainerStyle}
      >
        <Cards day={days.monday} />
        <Cards day={days.tuesday} />
        <Cards day={days.wednesday} />
        <Cards day={days.thursday} />
        <Cards day={days.friday} />
        <Cards day={days.saturday} />
        <Cards day={days.sunday} />
      </ScrollView>
      <Button
        title='Go To SingleRecipe'
        onPress={() => navigation.navigate('SingleRecipe')}
      />
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
    flexWrap: "wrap",
    alignContent: "space-around",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  Text: {
    fontSize: 30,
  },
});
