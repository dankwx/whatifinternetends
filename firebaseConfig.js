
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "whatifinternetends-a3f27.firebaseapp.com",
  projectId: "whatifinternetends-a3f27",
  storageBucket: "whatifinternetends-a3f27.appspot.com",
  messagingSenderId: "576382437333",
  appId: "1:576382437333:web:852ecc4e8365f5ac321f5c",
  measurementId: "G-R6X60KQG2X"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
