import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC8BPovpK6r-UVbbHUKGQqscd53J2kdonE",
  authDomain: "fir-webapp-5f017.firebaseapp.com",
  projectId: "fir-webapp-5f017",
  storageBucket: "fir-webapp-5f017.appspot.com",
  messagingSenderId: "820686879323",
  appId: "1:820686879323:web:765c3ff808f38393681d7e",
  measurementId: "G-X87RX444DX"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
