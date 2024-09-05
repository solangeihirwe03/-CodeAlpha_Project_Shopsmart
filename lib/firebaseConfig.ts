import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyABdIcJRVHy5ecNnfvquLx5nv7LIVCtJQI",
    authDomain: "shopsmart-d4a6f.firebaseapp.com",
    projectId: "shopsmart-d4a6f",
    storageBucket: "shopsmart-d4a6f.appspot.com",
    messagingSenderId: "473879381955",
    appId: "1:473879381955:web:5d45cb423b6f0b1468df76"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH =getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
