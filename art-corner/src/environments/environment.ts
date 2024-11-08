// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIa5AN2mekSI5-VFhl2PFfo7HjGkl6Yg0",
  authDomain: "art-corner-ea8cb.firebaseapp.com",
  projectId: "art-corner-ea8cb",
  storageBucket: "art-corner-ea8cb.firebasestorage.app",
  messagingSenderId: "37642620974",
  appId: "1:37642620974:web:cbf53d5dd2f16161b34fbf",
  measurementId: "G-8LW0ZS4LT8"
};

export const environment = {
  production: false,
  firebaseConfig
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);