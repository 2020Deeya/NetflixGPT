// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcNmIU_eh8zX76JnWx5EJ0bHri3LcSsRo",
  authDomain: "netflixgpt-8d5ad.firebaseapp.com",
  projectId: "netflixgpt-8d5ad",
  storageBucket: "netflixgpt-8d5ad.appspot.com",
  messagingSenderId: "517909641901",
  appId: "1:517909641901:web:2583f8bbf52d5ac5fba424",
  measurementId: "G-7JKGTFWLGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();