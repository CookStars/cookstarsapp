import { db } from '../../firebaseconfig'
import { GET_ALL_USERS } from '../constants/users'

export const getAllUsers = (users) => ({
    type: GET_ALL_USERS,
    users,
})

export const fetchAllUsers = () => {
    return async (dispatch) => {
        try {
            const tempArr = []

            await db
                .collection('users')
                .get()
                .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        tempArr.push(doc.data())
                    })
                })

            await dispatch(getAllUsers(tempArr))
        } catch (error) {
            console.log(error)
        }
    }
}
