import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import {getFirestore, collection, doc, addDoc, setDoc, updateDoc, getDoc, getDocs, onSnapshot, orderBy, query, where, increment} from "firebase/firestore";

const firebaseConfig = {
  
}

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  db,
  collection,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
  increment
};