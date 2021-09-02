import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { firebaseConfig } from "./FirebaseInfo";

const firebaseConnection = firebaseConfig;

firebase.initializeApp(firebaseConnection);

export const getFirestore = () => firebase.firestore();
