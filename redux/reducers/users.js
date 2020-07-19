import { GET_ALL_USERS } from '../constants/users'

export default function users(state = [], action) {
    switch (action.type) {
        case GET_ALL_USERS:
            return action.users
        default:
            return state
    }
}
