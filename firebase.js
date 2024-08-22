// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAcR1e4l4Jim5oStPHMaTb_-xE1HiFQDU",
  authDomain: "flashcardsaas-4abe6.firebaseapp.com",
  projectId: "flashcardsaas-4abe6",
  storageBucket: "flashcardsaas-4abe6.appspot.com",
  messagingSenderId: "717360978055",
  appId: "1:717360978055:web:d513d5448999aac0a74022",
  measurementId: "G-ZR9KD84N4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}