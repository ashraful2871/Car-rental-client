// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDS-fF2CVNfzSC0DTs0JeM8Rgo5HyFzDGE",
  authDomain: "assignment-11-d815b.firebaseapp.com",
  projectId: "assignment-11-d815b",
  storageBucket: "assignment-11-d815b.firebasestorage.app",
  messagingSenderId: "794641061686",
  appId: "1:794641061686:web:e7cce599708a1177fcc597",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
