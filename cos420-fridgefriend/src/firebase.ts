// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMt2WEVADcjuuA9zGTC0QMILlbd5UAGZs",
  authDomain: "cos420-teamd.firebaseapp.com",
  projectId: "cos420-teamd",
  storageBucket: "cos420-teamd.firebasestorage.app",
  messagingSenderId: "1080127406829",
  appId: "1:1080127406829:web:b3ff885cd76281317302e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);