import firebase from 'firebase';

let firebaseConfig = {
    apiKey: "AIzaSyDt-imboz7UCFIuCOtfv7bQyD3ZBM8hl88",
    authDomain: "react-twitter-db.firebaseapp.com",
    projectId: "react-twitter-db",
    storageBucket: "react-twitter-db.appspot.com",
    messagingSenderId: "413734342406",
    appId: "1:413734342406:web:7581f50585fe4587c8d887",
    measurementId: "G-393JQZYDR6"
}

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.6.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.6.1/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>
