// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMsdH-5sGlvLMJ2EcX3R0VAgwOOTPg3c0",
  authDomain: "unicef-c8a74.firebaseapp.com",
  projectId: "unicef-c8a74",
  storageBucket: "unicef-c8a74.appspot.com",
  messagingSenderId: "239339290719",
  appId: "1:239339290719:web:9d98162918911d9d929bea",
  measurementId: "G-73PJDR7GTL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);