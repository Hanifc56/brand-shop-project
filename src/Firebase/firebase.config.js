// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-jM1u1i8OoCboNfUmYLgfKEF4BZJOY3I",
  authDomain: "brand-shop-with-db.firebaseapp.com",
  projectId: "brand-shop-with-db",
  storageBucket: "brand-shop-with-db.appspot.com",
  messagingSenderId: "590278032925",
  appId: "1:590278032925:web:42078cc3176fa4bf4410f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
