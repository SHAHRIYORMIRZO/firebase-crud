import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDXurk_EmLZ4HR-G9AYxDV2BrYeKvwx7JA",
  authDomain: "fir-crud-4b8ea.firebaseapp.com",
  projectId: "fir-crud-4b8ea",
  storageBucket: "fir-crud-4b8ea.appspot.com",
  messagingSenderId: "146721010695",
  appId: "1:146721010695:web:18a7536d06b4390a31a6a2",
  measurementId: "G-QFRW5YBFN4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)