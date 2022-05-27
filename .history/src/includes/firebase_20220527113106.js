import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDjzF-jiPqWj3-7LeB91pxKPxXC9AWMQFs',
  authDomain: 'boomrayz.firebaseapp.com',
  projectId: 'boomrayz',
  storageBucket: 'boomrayz.appspot.com',
  //   messagingSenderId: "154867934018",
  appId: '1:154867934018:web:77e06e4e39faf2c8c21edb',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const users

export {
  auth,
  db,
};
