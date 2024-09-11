// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2qXeXeGhGgc-H-3jtR2_A8FySJwlcOPY",
  authDomain: "buybusy-22272.firebaseapp.com",
  projectId: "buybusy-22272",
  storageBucket: "buybusy-22272.appspot.com",
  messagingSenderId: "444496140843",
  appId: "1:444496140843:web:d5c0ec969b6c235d58686e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
