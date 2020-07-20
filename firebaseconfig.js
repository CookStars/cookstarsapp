import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTO_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGE_SENDER,
  FIREBASE_APP_ID,
  FIREBASE_MEASUREMENT_ID
} from '../secrets'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTO_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGE_SENDER,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

// const FireFunctions = {
//   passwordReset: email => {
//     // return firebase.auth().sendPasswordResetEmail(email)
//   }
// }


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { firebase, db };
