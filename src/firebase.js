// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBAFJvfdaOgXBpX7RSqzNOqRiub4DLMGUQ",
  // authDomain: "netflix-clone-cc514.firebaseapp.com",
  // projectId: "netflix-clone-cc514",
  // storageBucket: "netflix-clone-cc514.appspot.com",
  // messagingSenderId: "1018031399523",
  // appId: "1:1018031399523:web:c9fc2a56bcfc3598324e56"
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase  
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);