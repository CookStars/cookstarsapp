import { firebase, db } from '../firebaseconfig';
import AsyncStorage from '@react-native-community/async-storage';

// Action Types
export const SET_USER_INFO = 'SET_USER_INFO';
export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

// Action Creator
const initialState = { isLoggedIn: false };

const setUserInfo = (user) => {
  return {
    type: SET_USER_INFO,
    user,
  };
};

const updateUserInfo = (user) => {
  return {
    type: UPDATE_USER_INFO,
    user,
  };
};

// Action
export const fetchUserInfo = () => async (dispatch) => {
  try {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = db.collection(`users`).doc(user.uid);
        await docRef.get().then((doc) => {
          if (doc.exists) {
            const {
              favoriteRecipes,
              foodPreference,
              points,
              recipeHistory,
            } = doc.data();

            dispatch(
              setUserInfo({
                userId: user.uid,
                email: user.email,
                isLoggedIn: true,
                favoriteRecipes,
                foodPreference,
                points,
                recipeHistory,
              })
            );
          } else {
            console.log('No such document!');
          }
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const update = (userData) => (dispatch) => {
  try {
    dispatch(updateUserInfo(userData));
  } catch (err) {
    console.log(err);
  }
};

export const logOut = () => (dispatch) => {
  try {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // await AsyncStorage.removeItem('userInfo');
        dispatch(setUserInfo({ isLoggedIn: false }));
      });
  } catch (err) {}
};

// Reducer
export default function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO:
      //   console.log(action.user);
      return action.user;

    case UPDATE_USER_INFO:
      return { ...state, ...action.user };

    default:
      return state;
  }
}
