// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Recomendación de los docentes
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUeErG1xQ___9Wzny7JLMCaRVHfCnmdCE",
  authDomain: "dfsfsd-3a7d9.firebaseapp.com",
  projectId: "dfsfsd-3a7d9",
  storageBucket: "dfsfsd-3a7d9.firebasestorage.app",
  messagingSenderId: "67111563498",
  appId: "1:67111563498:web:5ebefec8b1daf9e7fc2793"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Guardo en la variable db y exporto la conexión a la base de datos de Firestore
// Con esto lo puedo usar en el resto de los componentes
// Me permite usar query
export const db = getFirestore(app)