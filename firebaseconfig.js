import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyC64IsgzPIll9rolOYBtqpkjLlZ8MMsB3g',
  authDomain: 'cookstarswdf-94cf8.firebaseapp.com',
  databaseURL: 'https://cookstarswdf-94cf8.firebaseio.com',
  projectId: 'cookstarswdf-94cf8',
  storageBucket: 'cookstarswdf-94cf8.appspot.com',
  messagingSenderId: '409318579317',
  appId: '1:409318579317:web:e23d98661c6ed70a49ec3c',
  measurementId: 'G-1GYL1VR4VH',
};
// Initialize Firebase
export const config = firebase.initializeApp(firebaseConfig);
export const db = config.database;
