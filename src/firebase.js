import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHAHcHvKFzc31g2LsG-yuSOq7awfN47nw",
  authDomain: "chat-68b3d.firebaseapp.com",
  projectId: "chat-68b3d",
  storageBucket: "chat-68b3d.appspot.com",
  messagingSenderId: "969947536412",
  appId: "1:969947536412:web:137fe67bb4f1745080d3d9",
  measurementId: "G-YRC29MZFHP"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();