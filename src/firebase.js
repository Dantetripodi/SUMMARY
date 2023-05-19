// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBO-AS0hgXxe_RLOWmqVWLyk4z-HJ1nd5k",
  authDomain: "summary-90a09.firebaseapp.com",
  projectId: "summary-90a09",
  storageBucket: "summary-90a09.appspot.com",
  messagingSenderId: "223755006721",
  appId: "1:223755006721:web:436073b84a7c9e8c232100",
  measurementId: "G-Z750CLWDJ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

