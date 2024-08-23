// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCINUmPHcjWLHvVH3M-7A8FF0GGkKkQ858",
  authDomain: "fikse-kodeprosjekt-analy-f6ff2.firebaseapp.com",
  projectId: "fikse-kodeprosjekt-analy-f6ff2",
  storageBucket: "fikse-kodeprosjekt-analy-f6ff2.appspot.com",
  messagingSenderId: "770110117678",
  appId: "1:770110117678:web:ec1f68640e0124e2520cbf",
  measurementId: "G-HL3L3H5J3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);