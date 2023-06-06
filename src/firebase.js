// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuZvgxF3wISleUIQLO2QOcmo4SSqZYsq4",
  authDomain: "soulcalm-be33a.firebaseapp.com",
  projectId: "soulcalm-be33a",
  storageBucket: "soulcalm-be33a.appspot.com",
  messagingSenderId: "214845928876",
  appId: "1:214845928876:web:057d1109125891ac79b609",
  measurementId: "G-Z8KKRL7TGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);