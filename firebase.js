// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; //f TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9DyA_gJwvc0Zf-hpNXuyv8eO8YvzjBYs",
  authDomain: "twitter-clone-57df4.firebaseapp.com",
  projectId: "twitter-clone-57df4",
  storageBucket: "twitter-clone-57df4.appspot.com",
  messagingSenderId: "8773456294",
  appId: "1:8773456294:web:7905f2c1bf66d017673f67",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
