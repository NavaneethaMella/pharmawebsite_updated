// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbIdcJCO_VdiHF8yBxjjtsvpf7HoaZUq0",
  authDomain: "nextjs-7eb01.firebaseapp.com",
  projectId: "nextjs-7eb01",
  storageBucket: "nextjs-7eb01.firebasestorage.app",
  messagingSenderId: "552061559126",
  appId: "1:552061559126:web:17af93297d9bdf2e3c36f7",
  measurementId: "G-863BBSFXWR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}