//Importing necessary functions for firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
//Unique firebase config; when using different firebase backend, copy paste firebaseConfig below
const firebaseConfig = {
  apiKey: "AIzaSyCZ04b-r8VE0K-J9u-TNVFwtFjoAKP-6Vs",
  authDomain: "reciperadar-73373.firebaseapp.com",
  projectId: "reciperadar-73373",
  storageBucket: "reciperadar-73373.appspot.com",
  messagingSenderId: "523522281592",
  appId: "1:523522281592:web:70093b7526989ae8375d8d",
  measurementId: "G-5LYNDWS5LP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//Initializes database that is used for login and signup
export const database = getFirestore(app);