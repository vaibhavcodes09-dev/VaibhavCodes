
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAp38q2967UwINr1qwsi4jkgrrV96LPJ-g",
  authDomain: "vaibhavcodes-8b672.firebaseapp.com",
  projectId: "vaibhavcodes-8b672",
  storageBucket: "vaibhavcodes-8b672.firebasestorage.app",
  messagingSenderId: "1024425990192",
  appId: "1:1024425990192:web:6a2728974db2d62ef135f5",
  measurementId: "G-YB1JFH7YF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);