// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsTtpxfhD9_4XjYkkFKEL_KO_aRbqEPxY",
  authDomain: "nextgame-8b6e5.firebaseapp.com",
  projectId: "nextgame-8b6e5",
  storageBucket: "nextgame-8b6e5.appspot.com",
  messagingSenderId: "37644482862",
  appId: "1:37644482862:web:26b1e67712bb7f2b3162bf",
  measurementId: "G-616Z4LF2W3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);