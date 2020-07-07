const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

// exports.scheduleFunctions = functions.pubsub
//   .schedule('every 1 minute')
//   .onRun((context) => {
//     const data = {
//       name: 'Los Angeles',
//       state: 'CA',
//       country: 'USA',
//     };
//     db.collection('recipes').doc('vegan').set(data);
//     return null;
//   });

exports.katya = functions.https.onCall((data, context) => {
  const stuff = {
    name: 'New York',
    state: 'NY',
    country: 'USA',
  };
  db.collection('recipes').doc('vegan').set(stuff);
  return { hello: 'HELLO WORLD!' };
});
