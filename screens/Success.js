import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Image,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { db } from '../firebaseconfig';
import { connect } from 'react-redux';
import { fetchRecipes } from '../redux/recipeReducer';

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
//may want to write congrats! you earned __ badge. or __ points to next badge!

export function SuccessPage(props) {
  const { navigation, recipes, userInfo } = props;

  const today = new Date().getDay();
  const img = recipes[today + 1].image;

  const handleFavorite = () => {
    db.collection('users')
      .doc(userInfo.userId)
      .update({
        favoriteRecipes: {
          ...userInfo.favoriteRecipes,
          [recipes[today].id]: recipes[today],
        },
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <ImageBackground
          source={require('../assets/cuteavocado.png')}
          style={styles.avocadoImg}
        >
          <Image
            source={require('../assets/banner.png')}
            style={styles.banner}
          />
        </ImageBackground>
      </View>

      <View style={styles.congratsContainer}>
        <View>
          <Text style={styles.congratsText}> YAY YOU DID IT </Text>
        </View>
      </View>
      <View style={styles.pointsContainer}>
        <View>
          <Image
            source={require('../assets/congratsBadge.png')}
            style={styles.badge}
          />
          <Text>Point Status {userInfo.points}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => handleFavorite()}>
        <Text>Did you like it? Add to Favorites!</Text>
      </TouchableOpacity>

      <View style={styles.tmrwRecipe}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate('SingleRecipe', {
              recipe: recipes[today + 1],
              day: weekdays[today + 1],
            })
          }
        >
          <Image
            source={{ uri: img }}
            style={{ width: Dimensions.get('screen').width, height: 300 }}
          />
          <View style={styles.labelContainer}>
            <Text style={styles.tmrwRecipelabel}>Tomorrow's Recipe</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Map State + Dispatch
const mapState = (state) => ({
  recipes: state.recipes,
  userInfo: state.user,
});

const mapDispatch = (dispatch) => {
  return {
    getRecipes: (pref) => dispatch(fetchRecipes(pref)),
  };
};

export default connect(mapState, mapDispatch)(SuccessPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    alignContent: 'space-around',
    width: '100%',
  },
  image: {},
  banner: {
    width: Dimensions.get('screen').width,
    height: 100,
  },
  avocadoImg: {
    width: Dimensions.get('screen').width,
  },
  congratsContainer: {
    flex: 3,
  },
  congratsText: {
    fontSize: 30,
    alignSelf: 'center',
  },
  pointsContainer: {
    flex: 4,
  },
  tmrwRecipe: {
    justifyContent: 'flex-end',
  },
  badge: {
    width: 200,
    height: 200,
  },

  labelContainer: {
    position: 'absolute',
    top: '10%',
    right: '-3%',
    height: 37,
    width: 220,
    borderRadius: 15,
    backgroundColor: '#E8EDED',
  },
  tmrwRecipelabel: {
    opacity: 0.9,
    backgroundColor: 'transparent',
    color: '#E07A5F',
    fontSize: 19,
    marginTop: 7,
    marginLeft: 31,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//     backgroundColor: '#000',
//     alignItems: 'center',
//     width: '100%',
//   },
//   h1: {
//     color: '#008F68',
//     fontSize: 40,
//   },
//   h2: {
//     color: '#FAE042',
//     fontSize: 18,
//     marginTop: 8,
//   },
// image: {
//   width: 300,
//   height: 260,
//   justifyContent: 'center',
// },
// buttonContainer: {
//   backgroundColor: '#008F68',
//   borderRadius: 5,
//   padding: 8,
//   margin: 8,
// },
// topContainer: {
//   flex: 2,
//   justifyContent: 'center',
//   alignItems: 'center',
// },
// middleContainer: {
//   flex: 3,
//   justifyContent: 'flex-start',
//   alignItems: 'center',
// },
// bottomContainer: {
//   justifyContent: 'flex-end',
//   width: '90%',
//   margin: 20,
//   padding: 10,
// },
// });
