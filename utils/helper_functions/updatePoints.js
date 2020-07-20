import { db } from '../../firebaseconfig'

export default function updatePoints(userInfo, recipe) {
    const currRecipeId = recipe.id
    let today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
    const yyyy = today.getFullYear()

    today = mm + '/' + dd + '/' + yyyy

    if (!userInfo.recipeHistory[currRecipeId]) {
        console.log('last completed')
        db.collection('users')
            .doc(userInfo.userId)
            .update({
                points: userInfo.points + 10,
                recipeHistory: {
                    ...userInfo.recipeHistory,
                    [currRecipeId]: { ...recipe, lastCompleted: today },
                },
            })
    } else if (userInfo.recipeHistory[currRecipeId]) {
        if (userInfo.recipeHistory[currRecipeId].lastCompleted !== today) {
            db.collection('users')
                .doc(userInfo.userId)
                .update({
                    points: userInfo.points + 10,
                    recipeHistory: {
                        ...recipeHistory,
                        [currRecipeId]: { ...recipe, lastCompleted: today },
                    },
                })
        }
    }
}
