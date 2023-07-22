// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzHS7Lw_gYLNRrqNqcnVNRFViHz5PRUtM",
  authDomain: "college-booking-22094.firebaseapp.com",
  projectId: "college-booking-22094",
  storageBucket: "college-booking-22094.appspot.com",
  messagingSenderId: "849333414059",
  appId: "1:849333414059:web:6eb04b5460e9311336efee",
  measurementId: "G-ZT3MWEK8KN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;