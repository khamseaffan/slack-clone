// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAE4551KOsexeV3aIGtMfAGcrjBAMJcCY8",
  authDomain: "slack-clone-28b4c.firebaseapp.com",
  projectId: "slack-clone-28b4c",
  storageBucket: "slack-clone-28b4c.appspot.com",
  messagingSenderId: "992225621042",
  appId: "1:992225621042:web:a5f2bb9b9861d6444f382b",
  measurementId: "G-4NLE9TMYQW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
