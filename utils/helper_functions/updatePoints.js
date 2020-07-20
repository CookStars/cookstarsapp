import { db } from '../../firebaseconfig'

// const updatePoints = async (userInfo, recipe) => {
export default function updatePoints(userInfo, recipe) {
    const currRecipeId = recipe.id
    let today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    const yyyy = today.getFullYear()
    const recipeHistory = userInfo.recipeHistory

    today = mm + '/' + dd + '/' + yyyy

    await db
        .collection('users')
        .doc(userInfo.userId)
        .update({
            points: userInfo.points + 10,
            recipeHistory: {
                ...recipeHistory,
                [recipe.id]: { ...recipe, lastCompleted: today },
            },
        })
 
 console.log('updating')
}

export default updatePoints
