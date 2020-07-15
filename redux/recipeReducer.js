import { createStore, applyMiddleware } from 'redux';
import { db } from '../firebaseconfig';

// Action Types
export const GET_RECIPES = 'GET_RECIPES';

// Action Creator
const getRecipes = (recipes) => {
  return {
    type: GET_RECIPES,
    recipes,
  };
};

// Fetch Recipes Based on Food Preference
export const fetchRecipes = (pref) => async (dispatch) => {
  try {
    const recipes = await db.collection('recipes').doc(pref).get();

    if (recipes.exists) {
      const allRecipes = recipes.data().recipe;
      dispatch(getRecipes(allRecipes));

      console.log(`Success, ${pref} recipes found`);
    } else {
      console.log('No data found');
    }
  } catch (err) {}
};

// Initial State
const initialState = [];

// Reducer
export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return action.recipes;

    default:
      return state;
  }
}
