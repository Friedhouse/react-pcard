// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2vwR3FXy9pSxq_38fxzHpkRrzIgya4q0",
  authDomain: "beyond-the-scalpel.firebaseapp.com",
  projectId: "beyond-the-scalpel",
  storageBucket: "beyond-the-scalpel.appspot.com",
  messagingSenderId: "720720276883",
  appId: "1:720720276883:web:81b7a4c64a0d6aab268c66",
  measurementId: "G-GD38ZWRJ8H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const analytics = getAnalytics(app);