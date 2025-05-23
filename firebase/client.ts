// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD397cb6F8dk-Tk1wXvhwlGQUa6cGAhMzU",
  authDomain: "prepwise-158e4.firebaseapp.com",
  projectId: "prepwise-158e4",
  storageBucket: "prepwise-158e4.firebasestorage.app",
  messagingSenderId: "719504212094",
  appId: "1:719504212094:web:33e28400517bdbe326982f",
  measurementId: "G-DXY3LR6HYD"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);