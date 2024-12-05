import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyBf2AikiZS1Z30YoWJ8NUjqk6a5mSqe-nc",
    authDomain: "reactmyschool-a0a9a.firebaseapp.com",
    projectId: "reactmyschool-a0a9a",
    storageBucket: "reactmyschool-a0a9a.firebasestorage.app",
    messagingSenderId: "462102717799",
    appId: "1:462102717799:web:b5e1030225703672f2bbc2",
    measurementId: "G-1ZCE8RRSVW"
  };
  firebase.initializeApp(firebaseConfig);
  export const dataref= firebase.database();
  export default firebase;