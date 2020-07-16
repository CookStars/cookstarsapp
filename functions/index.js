// import * as sgMail from '@sendgrid/mail'
sgMail = require('@sendgrid/mail')
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
const key = '33c3ad3d272d40fa855ba50cb02be7b5';
const axios = require('axios');

const API_KEY = functions.config().sendgrid.key
const TEMPLATE_ID = functions.config().sendgrid.template
sgMail.setApiKey(API_KEY)

exports.newRecipeEmails = functions.pubsub
  .schedule('0 4 * * 0')
  .onRun(async (context) => {
    try {
      let tempArr = []
      await admin.firestore().collection('users').get()
        .then((querySnapshot) => {

          querySnapshot.forEach((doc) => {
            admin.firestore().collection('mail').add({
              to: doc.data().email,
              template: {
                name: 'newRecipes',
                data: {
                  fname: 'CookStars',
                  msg: 'New recipes have been added!'
                }
              }
            })


            // tempArr.push(doc.data().email)

          })
          return tempArr

        })


      // admin.firestore().collection('mail').add({
      //   to: tempArr,
      //   template: {
      //     name: 'newRecipes',
      //     data: {
      //       fname: 'CookStars',
      //       msg: 'New recipes have been added!'
      //     }
      //   }
      // })


    } catch (error) {
      console.log(error)
    }
    // const emails = userSnapshots.doc.map(snap => snap.data().email)
    // console.log('EMAILS', emails)

    // return admin.firestore().collection('mail').add({
    //   to: emails,
    //   message: {
    //     subject: 'New Recipes Are Here!',
    //     html: ' hey! check the CookStars App for new recipes'
    //   }
    // })
    // const msg = {
    //   to: emails,
    //   from: 'cookstarswdf@gmail.com',
    //   template_Id: TEMPLATE_ID,
    //   dynamic_template_data: {
    //     subject: 'New Recipes Added',
    //     text: 'Check your CookStars App for new recipes!'
    //   }
    // }
    // return sgMail.send(msg)

  })


exports.getVeganRecipes = functions.pubsub
  .schedule('0 4 * * 0')
  .onRun(async (context) => {

    let newData;
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${key}&tags=vegan,dinner&number=10`
    );

    newData = refactorData(res.data);


    newData = JSON.parse(JSON.stringify(newData))
    db.collection('recipes').doc('vegan').set({ recipe: newData })

    return null;
  });

exports.getMeatRecipes = functions.pubsub
  .schedule('0 4 * * 0')
  .onRun(async (context) => {

    let newData;
    const res = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${key}&tags=dinner&number=10`)

    newData = refactorData(res.data)

    newData = JSON.parse(JSON.stringify(newData))
    db.collection('recipes').doc('meatlover').set({ recipe: newData })

    return null;
  });



// exports.newUserSignUp = functions.auth.user().onCreate((user) => {
//   return admin.firestore().collection('users').doc(user.uid).set({
//     email: user.email,
//     firstName: '',
//     lastName: '',
//     points: 0,
//     foodPreference: '',
//     favoriteRecipes: {},
//     recipeHistory: {},
//   });

// });

exports.userDeleted = functions.auth.user().onDelete((user) => {
  const doc = admin.firestore().collection('users').doc(user.uid);
  return doc.delete();
});

const refactorData = (recipesAPI) => {
  const recipesArr = recipesAPI.recipes;
  let newArr = []
  for (let i = 0; i < recipesArr.length; i++) {
    let recipe = recipesArr[i]
    const {
      id,
      vegan,
      title,
      extendedIngredients,
      readyInMinutes,
      servings,
      image,
      summary,
      instructions,
      analyzedInstructions,
      spoonacularSourceUrl,
    } = recipe;

    if (analyzedInstructions.length > 1) {
      continue;
    }

    const ingredients = extendedIngredients.map(ingredient => {
      const { id, name, original, image } = ingredient
      return { id, name, original, image }
    }
    )

    newArr.push({

      id,
      vegan,
      title,
      ingredients,
      readyInMinutes,
      servings,
      image,
      summary,
      instructions,
      analyzedInstructions,
      spoonacularSourceUrl,
    })
  }
  return newArr;
};
