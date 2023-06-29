// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3ecYaMKNKUu7AbT2pp5dBjl_9CxO2dAY",
  authDomain: "fir-react-169a4.firebaseapp.com",
  projectId: "fir-react-169a4",
  storageBucket: "fir-react-169a4.appspot.com",
  messagingSenderId: "579505948673",
  appId: "1:579505948673:web:93bbcd3cdd423facddd800",
  measurementId: "G-4GCBFQPC15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth=getAuth(app);
export const provider= new GoogleAuthProvider();