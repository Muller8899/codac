// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: "codab-82c80.firebaseapp.com",
  projectId: "codab-82c80",
  storageBucket: "codab-82c80.firebasestorage.app",
  messagingSenderId: "807016501235",
  appId: "1:807016501235:web:dae5b8072eb1faa6880c86",
  measurementId: "G-SXYZW3G2RD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
