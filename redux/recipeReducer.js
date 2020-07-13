import { createStore, applyMiddleware } from 'redux';
import { db } from '../firebaseconfig';

// Action Types
export const GET_VEGAN_RECIPES = 'GET_VEGAN_RECIPES';

// Action Creator
const initialState = [];

const getVeganRecipes = (recipes) => {
  return {
    type: GET_VEGAN_RECIPES,
    recipes,
  };
};

// Action
export const fetchVeganRecipes = () => async (dispatch) => {
  try {
    const recipes = await db.collection('recipes').doc('vegan').get();

    if (recipes.exists) {
      const allRecipes = recipes.data().recipe;
      dispatch(getVeganRecipes(allRecipes));

      console.log('Success, recipes found');
    } else {
      console.log('No data found');
    }
  } catch (err) {}
};

// Reducer
export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VEGAN_RECIPES:
      return action.recipes;

    default:
      return state;
  }
}
