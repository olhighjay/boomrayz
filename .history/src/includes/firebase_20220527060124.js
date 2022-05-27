import firebase from 'firebase/app';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjzF-jiPqWj3-7LeB91pxKPxXC9AWMQFs",
  authDomain: "boomrayz.firebaseapp.com",
  projectId: "boomrayz",
  storageBucket: "boomrayz.appspot.com",
  messagingSenderId: "154867934018",
  appId: "1:154867934018:web:77e06e4e39faf2c8c21edb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);