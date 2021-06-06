import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAvcn2ofblokJR6Xa67G5FPYnhFvcXo8Hk",
    authDomain: "twitter-f5c59.firebaseapp.com",
    projectId: "twitter-f5c59",
    storageBucket: "twitter-f5c59.appspot.com",
    messagingSenderId: "185564850268",
    appId: "1:185564850268:web:c3cd8bf3f318c52301de99",
    measurementId: "G-SV79GHR6HX"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);


export const auth = firebaseApp.auth();
export const db = firebaseApp.firestore();

export default db;
