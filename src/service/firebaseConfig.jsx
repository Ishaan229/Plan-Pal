// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAM_uyLHiSG1Ho7gHsq-7LjDwo4PgthKDo",
    authDomain: "planpal-c67a0.firebaseapp.com",
    projectId: "planpal-c67a0",
    storageBucket: "planpal-c67a0.firebasestorage.app",
    messagingSenderId: "711628540556",
    appId: "1:711628540556:web:24465fb44d840fc3f909a9",
    measurementId: "G-MQGTYKKSF7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);