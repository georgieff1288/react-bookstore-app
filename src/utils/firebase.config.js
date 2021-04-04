import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var environment = {
    apiKey: "AIzaSyBB02uDdfWgDrB6zpuz_V8phN6lPkXYuQE",
    authDomain: "react-bookstore-app-eaa7b.firebaseapp.com",
    databaseURL: "https://react-bookstore-app-eaa7b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-bookstore-app-eaa7b",
    storageBucket: "react-bookstore-app-eaa7b.appspot.com",
    messagingSenderId: "699648478538",
    appId: "1:699648478538:web:58a5031b430d85437985b3"
};

const firebaseConfig = firebase.initializeApp(environment);
export const db = firebaseConfig.firestore();
export const auth = firebaseConfig.auth(); 