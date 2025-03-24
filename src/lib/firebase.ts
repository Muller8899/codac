// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsjU_y3C_VMu8ECJ8ZbkcSF5FbDbbcz2k",
  authDomain: "codashop-clone.firebaseapp.com",
  projectId: "codashop-clone",
  storageBucket: "codashop-clone.appspot.com",
  messagingSenderId: "845621634512",
  appId: "1:845621634512:web:df234a0e2d32b5af1234ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
