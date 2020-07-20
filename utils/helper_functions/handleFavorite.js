import { db } from '../../firebaseconfig'

const today = new Date().getDay()

const handleFavorite = (userInfo, recipes) => {
    db.collection('users')
        .doc(userInfo.userId)
        .update({
            favoriteRecipes: {
                ...userInfo.favoriteRecipes,
                [recipes[today].id]: recipes[today],
            },
        })
}
export default handleFavorite
