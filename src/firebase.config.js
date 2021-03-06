import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNDc9X3iNyvc3INUE6KXmDkhq5_SEfEYM",
  authDomain: "house-marketplace-app-399.firebaseapp.com",
  projectId: "house-marketplace-app-399",
  storageBucket: "house-marketplace-app-399.appspot.com",
  messagingSenderId: "1039254052004",
  appId: "1:1039254052004:web:911e91db199999d7f61a31",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
