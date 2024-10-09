// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoaihXU17IrjfFdvN_gInh41Zqzaov5EI",
  authDomain: "book-store-43ec4.firebaseapp.com",
  projectId: "book-store-43ec4",
  storageBucket: "book-store-43ec4.appspot.com",
  messagingSenderId: "480446874867",
  appId: "1:480446874867:web:637644ee80602eb58ee386",
  databaseURL:"https://book-store-43ec4-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);