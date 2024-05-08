// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getFirestore(app);