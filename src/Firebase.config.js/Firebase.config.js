// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8utYL_E9NfdgkcBMCS-mRDfREKuWEE6I",
  authDomain: "dragon-news-auth-52-7537e.firebaseapp.com",
  projectId: "dragon-news-auth-52-7537e",
  storageBucket: "dragon-news-auth-52-7537e.appspot.com",
  messagingSenderId: "1073060695603",
  appId: "1:1073060695603:web:c48981f5546a169c525d46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default(auth)