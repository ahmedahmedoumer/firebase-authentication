// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-66ZIon376N2xpzP8TQq0Xlstq-YfOwg",
  authDomain: "project-blog-test-d67dc.firebaseapp.com",
  projectId: "project-blog-test-d67dc",
  storageBucket: "project-blog-test-d67dc.appspot.com",
  messagingSenderId: "641626738940",
  appId: "1:641626738940:web:711bfbf229d7a5c4fe8779",
  measurementId: "G-R1WT4CJXB0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(firebaseApp);

// Initialize Google Auth provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

// Export Auth and helper functions
export { auth, googleProvider };
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const signUpWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);

