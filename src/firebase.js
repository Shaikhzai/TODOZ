// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1czqb020-7BcW613qtw6fs1_LwXjlDrU",
  authDomain: "todo-listingz.firebaseapp.com",
  projectId: "todo-listingz",
  storageBucket: "todo-listingz.appspot.com",
  messagingSenderId: "15977646182",
  appId: "1:15977646182:web:523defd02dd8f2288145a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db= getFirestore(app);
