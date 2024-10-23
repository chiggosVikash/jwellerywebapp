// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";



const apiKey = process.env.MY_FIREBASE_API_KEY;
const authDomain = process.env.MY_FIREBASE_AUTH_DOMAIN;
const messagingSenderId = process.env.MY_FIREBASE_MESSAGE_SENDER_ID;
const appId = process.env.MY_FIREBASE_APP_ID;
const projectId = "veliciae-5fd0e";
const storageBucket = "veliciae-5fd0e.appspot.com";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);


