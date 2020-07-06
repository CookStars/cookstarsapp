import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import { recipes } from '../Seed';
const img = recipes[0].imageURL;

export default function Cards(props) {
  const { day } = props;

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: img,
            }}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />
          <View style={styles.labelContainer}>
            <Text style={styles.recipeOfTheDay}>{day}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 5,
    width: 150,
    height: 300,
  },
  imgContainer: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  labelContainer: {
    position: 'absolute',
    top: 150,
    height: 37,
    width: 100,
    borderRadius: 15,
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
  },
  recipeOfTheDay: {
    opacity: 0.9,
    backgroundColor: 'transparent',
    color: 'rgba(35,40,58,1)',
    fontSize: 19,
    marginTop: 7,
    textAlign: 'center',
  },
});
