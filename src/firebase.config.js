import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var environment = {
    apiKey: "AIzaSyB__zVtA-UFFRWGXRamUx_f9lbamZGyh2U",
    authDomain: "react-bookstore-app-1c03c.firebaseapp.com",
    databaseURL: "https://react-bookstore-app-1c03c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-bookstore-app-1c03c",
    storageBucket: "react-bookstore-app-1c03c.appspot.com",
    messagingSenderId: "139376495432",
    appId: "1:139376495432:web:cbd34a3ae97f47bf82017d"
};

const firebaseConfig = firebase.initializeApp(environment);
export const db = firebaseConfig.firestore();
export const auth = firebaseConfig.auth(); 







