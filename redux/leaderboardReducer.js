import { firebase, db } from '../firebaseconfig';

export const GET_ALL_USERS = 'GET_ALL_USERS'



export const getAllUsers = (users) => ({
  type: GET_ALL_USERS,
  users
})

export const fetchAllUsers = () => {

  return async (dispatch) => {
    try {
      const users = await db.collection("users").get()
      console.log(users)
      dispatch(getAllUsers(users))


    } catch (error) {
      console.log(error)
    }
  }
}
export default function leaderboardReducer(state = [], action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users
    default:
      return state
  }
}
