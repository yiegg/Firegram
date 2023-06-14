/* Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";

import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDimR0bXdYlxljt6oz_UBekbrgkd8HLtVo",
  authDomain: "firegram-6ac48.firebaseapp.com",
  projectId: "firegram-6ac48",
  storageBucket: "firegram-6ac48.appspot.com",
  messagingSenderId: "108952936082",
  appId: "1:108952936082:web:50d938ade438e7c807104b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const projectStorage = storage();
const projectFirestore = firestore();

export {projectStorage, projectFirestore};

*/
//https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyDimR0bXdYlxljt6oz_UBekbrgkd8HLtVo",
    authDomain: "firegram-6ac48.firebaseapp.com",
    projectId: "firegram-6ac48",
    storageBucket: "firegram-6ac48.appspot.com",
    messagingSenderId: "108952936082",
    appId: "1:108952936082:web:50d938ade438e7c807104b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
const timestamp = serverTimestamp();

export { projectStorage, projectFirestore, timestamp};