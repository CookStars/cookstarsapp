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
import { db } from '../firebaseconfig.js';
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

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
    // this.state = {
    //   vegan: [],
    //   meatlover: [],
    //   recipeFinished: false,
    // };
    // this.recipeCompleted = this.recipeCompleted.bind(this);
    // this.getRecipes = this.getRecipes.bind(this);
    // this.props.getVeganRecipes();
  }

  componentDidMount() {
    const pref = this.props.userInfo.foodPreference;
    this.props.getRecipes(pref);
    // console.log(this.props);
  }

  cards = () => {
    return weekdays.map((weekday, index) => (
      <Cards
        key={index}
        day={weekday}
        index={index}
        navigation={this.props.navigation}
        recipes={this.props.recipes}
        userInfo={this.props.userInfo}
        // recipeFinished={this.state.recipeFinished}
        // recipeCompleted={this.recipeCompleted}
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
            navigation={this.props.navigation}
            recipes={this.props.recipes}
            userInfo={this.props.userInfo}
            // recipeFinished={this.state.recipeFinished}
            // recipeCompleted={this.recipeCompleted}
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
