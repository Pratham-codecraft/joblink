import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcX2TypvdYRnj0Bebm16oUshbkjPGX43c",
  authDomain: "joblink-4f941.firebaseapp.com",
  projectId: "joblink-4f941",
  storageBucket: "joblink-4f941.firebasestorage.app",
  messagingSenderId: "26820243665",
  appId: "1:26820243665:web:a806941b31cb6f5f5795f0",
  measurementId: "G-G31YVHWL1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);