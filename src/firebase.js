import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace with YOUR Firebase config from console.firebase.google.com
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDajAkfmCt15u3sn3qaCEaFqc8k_bU3UhM",
  authDomain: "grace-garnet-group.firebaseapp.com",
  projectId: "grace-garnet-group",
  storageBucket: "grace-garnet-group.firebasestorage.app",
  messagingSenderId: "348787260348",
  appId: "1:348787260348:web:d3086c5c4cf2655b5e49b9",
  measurementId: "G-RNM5NBNXS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);