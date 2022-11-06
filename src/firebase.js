// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5i-NlMOTEGX_SOp5WYoCCGn-a2ocHYfc",
  authDomain: "auth-lesson-e1d2d.firebaseapp.com",
  projectId: "auth-lesson-e1d2d",
  storageBucket: "auth-lesson-e1d2d.appspot.com",
  messagingSenderId: "911539141932",
  appId: "1:911539141932:web:532db96ceaf0374cb54089",
  measurementId: "G-2N72KHE7ZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app