import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFge7THwxTazF3V-q7-2l78H1BjhQq5lY",
  authDomain: "curso-react-93685.firebaseapp.com",
  projectId: "curso-react-93685",
  storageBucket: "curso-react-93685.firebasestorage.app",
  messagingSenderId: "83190840468",
  appId: "1:83190840468:web:c446a873a0cd85e3ba0881",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//FIRESTORE nos permite tener una base de datos

//Obtener la constante database de nuestra app (basicamente un objeto de acceso a la base de datos de nuestra aplicacion)
const database = getFirestore(app);

export default database;
