
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAXJwxA0LKe834m2WbAkuNKYneZZjCShjA",
    authDomain: "netflix-clone-97e69.firebaseapp.com",
    projectId: "netflix-clone-97e69",
    storageBucket: "netflix-clone-97e69.appspot.com",
    messagingSenderId: "667766537305",
    appId: "1:667766537305:web:61cb74c890f027bca54548"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };




 


