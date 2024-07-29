// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRTmh1UWTQ6jcY9kv-DdUvmKzKfzMg-FY",
    authDomain: "cadastro-fire-a3a1d.firebaseapp.com",
    projectId: "cadastro-fire-a3a1d",
    storageBucket: "cadastro-fire-a3a1d.appspot.com",
    messagingSenderId: "385908161065",
    appId: "1:385908161065:web:2ff4c0cf6280fefe9f3a38",
    measurementId: "G-6M9EFSW59C"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);


export { auth, firestore };