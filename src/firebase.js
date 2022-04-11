import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqmsvvkix1EfSGB06cjBsy_im0y3iAvKE",
  authDomain: "sparta-react-basic-2e6de.firebaseapp.com",
  projectId: "sparta-react-basic-2e6de",
  storageBucket: "sparta-react-basic-2e6de.appspot.com",
  messagingSenderId: "66458610422",
  appId: "1:66458610422:web:be38114dba51171ed99ad7",
  measurementId: "G-2ME1CG17EX",
};

initializeApp(firebaseConfig);

export const db = getFirestore();
