import { db } from '../../firebaseconfig'
import { GET_RECIPES } from '../constants/recipes'

// Action Creator
const getRecipes = (recipes) => ({
    type: GET_RECIPES,
    recipes,
})

// Fetch Recipes Based on Food Preference
export const fetchRecipes = (pref) => async (dispatch) => {
    try {
        const recipes = await db.collection('recipes').doc(pref).get()

        if (recipes.exists) {
            const allRecipes = recipes.data().recipe
            dispatch(getRecipes(allRecipes))

            console.log(`Success, ${pref} recipes found`)
        } else {
            console.log('No data found')
        }
    } catch (err) {}
}
