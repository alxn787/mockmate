import { initializeApp, getApp , getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAsxP5y9n-vUd6EyIlt6Mj4N2e7u79wNOQ",
  authDomain: "mockmate-ff3be.firebaseapp.com",
  projectId: "mockmate-ff3be",
  storageBucket: "mockmate-ff3be.firebasestorage.app",
  messagingSenderId: "706375751804",
  appId: "1:706375751804:web:92f9439d0b84db501e51f9",
  measurementId: "G-6FB81X794C"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);