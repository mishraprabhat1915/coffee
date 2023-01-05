// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore
} from "firebase/firestore"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log("process", process.env)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//init service

const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
//collection ref

// const collRef = collection(db,'products')

// //get collection data

// getDocs(collRef)
// .then((snapshot)=>{
//     console.log(snapshot.docs)
//     let products =[]
//     snapshot.docs.forEach((doc)=>{
//         products.push({...doc.data(),id:doc.id})
//     })
// })
// .catch(err=>{
//     console.log(err.message)
// })