import { SET_USER_INFO, UPDATE_USER_INFO } from '../constants/user'

const initialState = { isLoggedIn: false }

export default function user(state = initialState, action) {
    switch (action.type) {
        case SET_USER_INFO:
            return action.user

        case UPDATE_USER_INFO:
            return { ...state, ...action.user }

        default:
            return state
    }
}
