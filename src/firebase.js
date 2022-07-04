import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD3mW1RGIEHmub-Zs_b7hs_JApuRzb3CWc",
  authDomain: "todo-app25.firebaseapp.com",
  projectId: "todo-app25",
  storageBucket: "todo-app25.appspot.com",
  messagingSenderId: "289420685812",
  appId: "1:289420685812:web:0f777c424c4e892f79c9a1",
  measurementId: "G-3E9TM75EJD"
});

const db = firebaseApp.firestore();

export default db ;


/**
 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3mW1RGIEHmub-Zs_b7hs_JApuRzb3CWc",
  authDomain: "todo-app25.firebaseapp.com",
  projectId: "todo-app25",
  storageBucket: "todo-app25.appspot.com",
  messagingSenderId: "289420685812",
  appId: "1:289420685812:web:0f777c424c4e892f79c9a1",
  measurementId: "G-3E9TM75EJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 
firebase login
firebase init
firebase deploy
*/
