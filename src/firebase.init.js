// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC36XVDndsLh9AaV4lfyFCLC8SM3f64jKs",
  authDomain: "genius-car-services-30584.firebaseapp.com",
  projectId: "genius-car-services-30584",
  storageBucket: "genius-car-services-30584.appspot.com",
  messagingSenderId: "688749337842",
  appId: "1:688749337842:web:0a10b4390581f28c0c846b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth