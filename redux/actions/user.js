import { firebase, db } from '../../firebaseconfig'
import { SET_USER_INFO, UPDATE_USER_INFO } from '../constants/user'

// Action Creator
const setUserInfo = (user) => ({
    type: SET_USER_INFO,
    user,
})

const updateUserInfo = (user) => ({
    type: UPDATE_USER_INFO,
    user,
})

// Action
export const fetchUserInfo = () => (dispatch) => {
    try {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const docRef = db.collection(`users`).doc(user.uid)
                docRef.get().then((doc) => {
                    const {
                        favoriteRecipes,
                        foodPreference,
                        points,
                        recipeHistory,
                        icon,
                    } = doc.data()

                    dispatch(
                        setUserInfo({
                            userId: user.uid,
                            email: user.email,
                            isLoggedIn: true,
                            favoriteRecipes,
                            foodPreference,
                            points,
                            recipeHistory,
                            icon,
                        })
                    )
                })
            }
        })
    } catch (err) {
        console.error(err)
    }
}

export const update = (userData) => (dispatch) => {
    try {
        dispatch(updateUserInfo(userData))
    } catch (err) {
        console.error(err)
    }
}

export const logOut = () => (dispatch) => {
    try {
        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch(setUserInfo({ isLoggedIn: false }))
            })
    } catch (err) {
        console.error(err)
    }
}
