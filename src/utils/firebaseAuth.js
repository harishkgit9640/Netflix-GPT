/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "netflixgpt-42748.firebaseapp.com",
    projectId: "netflixgpt-42748",
    storageBucket: "netflixgpt-42748.firebasestorage.app",
    messagingSenderId: "757315219473",
    appId: "1:757315219473:web:feef3e8e4dc398283a81b0",
    measurementId: "G-6M5SJ5YZX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
