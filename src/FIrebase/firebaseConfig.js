import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCqmMA7oklLfDQaZv4fJRsy9V8BLfU6xRA",
  authDomain: "as-8c45c.firebaseapp.com",
  projectId: "as-8c45c",
  storageBucket: "as-8c45c.appspot.com",
  messagingSenderId: "590048743811",
  appId: "1:590048743811:web:66eda865a49bcba0d366b6"
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider()
const baseDatos = getFirestore()

export {app, google, facebook, baseDatos }