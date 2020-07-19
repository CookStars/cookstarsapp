import { GET_RECIPES } from '../constants/recipes'

const initialState = []

export default function recipes(state = initialState, action) {
    switch (action.type) {
        case GET_RECIPES:
            return action.recipes

        default:
            return state
    }
}
