// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
  authDomain: "eduboost-7dff3.firebaseapp.com",
  projectId: "eduboost-7dff3",
  storageBucket: "eduboost-7dff3.appspot.com",
  messagingSenderId: "1065647240859",
  appId: "1:1065647240859:web:749b8943f40f49f864f83e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);