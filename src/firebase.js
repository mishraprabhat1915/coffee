// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore
} from "firebase/firestore"
import {getAuth, GoogleAuthProvider  } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNsGgFOuPLgT_kzVqb13KfliqsC2U5_dc",
  authDomain: "coffee-shop-fc9eb.firebaseapp.com",
  projectId: "coffee-shop-fc9eb",
  storageBucket: "coffee-shop-fc9eb.appspot.com",
  messagingSenderId: "552009646684",
  appId: "1:552009646684:web:c77968fe31fe9d11a3dc99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//init service

const  db=getFirestore(app);
const auth = getAuth();

export {db,auth};
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