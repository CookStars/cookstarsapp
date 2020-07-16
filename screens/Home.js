import React, { Component } from 'react';
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
import { CardView, Cards } from '../components';
import { recipes } from '../Seed';
import { db, firebase } from '../firebaseconfig.js';
import { connect } from 'react-redux';
import { fetchRecipes } from '../redux/recipeReducer';
// import * as Permissions from 'expo-permissions'
// import Notifications from 'expo-notifications'
// import Constants from 'expo-constants'

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const today = new Date().getDay();

export class HomeScreen extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {};
  //   // this.state = {
  //   //   vegan: [],
  //   //   meatlover: [],
  //   //   recipeFinished: false,
  //   // };
  //   // this.recipeCompleted = this.recipeCompleted.bind(this);
  //   // this.getRecipes = this.getRecipes.bind(this);
  //   // this.props.getVeganRecipes();
  // }

  // registerForPushNotifications = async () => {
  //   if (Constants.isDevice) {
  //     const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
  //     let finalStatus = existingStatus

  //     if (existingStatus !== 'granted') {
  //       const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
  //       finalStatus = status
  //     }

  //     if (finalStatus !== 'granted') { return }
  //     try {
  //       let token = await Notifications.getExpoPushTokenAsync()
  //       console.log('token:', token)

  //       firebase.database().ref('users/' + this.currentUser.uid + '/token').update({
  //         token: token
  //       })
  //     }
  //     catch (error) {
  //       console.log(error)
  //     }
  //   } else { ('must use physical device') }
  // }

  async componentDidMount() {
    const pref = this.props.userInfo.foodPreference;
    this.props.getRecipes(pref);
    // this.currentUser = await firebase.auth().currentUser
    // await this.registerForPushNotifications()
  }

  cards = () => {
    return weekdays.map((weekday, index) => (
      <Cards
        key={index}
        day={weekday}
        navigation={this.props.navigation}
        recipe={this.props.recipes[index]}
        userInfo={this.props.userInfo}
      />
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          vertical={true}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <CardView
            style={styles.card}
            day={weekdays[today]}
            navigation={this.props.navigation}
            recipes={this.props.recipes}
            userInfo={this.props.userInfo}
          />
          <Text style={styles.Text}>Recipes of the Week</Text>
          {this.cards()}
        </ScrollView>
      </View>
    );
  }
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

export default connect(mapState, mapDispatch)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollArea_contentContainerStyle: {
    flexWrap: 'wrap',
    alignContent: 'space-around',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Text: {
    fontSize: 30,
  },
});
