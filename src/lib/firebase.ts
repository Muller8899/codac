// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsbAfX5mLgYNUy7LVfWx6q73TUck2hR7U",
  authDomain: "codab-82c80.firebaseapp.com",
  projectId: "codab-82c80",
  storageBucket: "codab-82c80.firebasestorage.app",
  messagingSenderId: "807016501235",
  appId: "1:807016501235:web:dae5b8072eb1faa6880c86",
  measurementId: "G-SXYZW3G2RD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


