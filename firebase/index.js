import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA4_kM33hj-XxlDzEo9ZAizjiTu6RdFSdE",
  authDomain: "education-test-c157e.firebaseapp.com",
  projectId: "education-test-c157e",
  storageBucket: "education-test-c157e.appspot.com",
  messagingSenderId: "439727306662",
  appId: "1:439727306662:web:275668438931f6d86c8167",
  measurementId: "G-9H1SJD1VE4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export {auth, db}
