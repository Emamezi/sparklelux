import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { EmailAuthProvider } from "firebase/auth/web-extension";

import {
  getFirestore,
  getDoc, //get data
  setDoc, //set data
  doc, //gets an instance of the documents database
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO3_rgv78mN9dbpxbKusoZ-U9g23l5Vfk",
  authDomain: "crwn-clothing-db-69eb3.firebaseapp.com",
  projectId: "crwn-clothing-db-69eb3",
  storageBucket: "crwn-clothing-db-69eb3.appspot.com",
  messagingSenderId: "428614667265",
  appId: "1:428614667265:web:9dd3575889f65f488d8400",
};

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore(); //creating the db

//
export const createUserDocumentfromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid); //database, collections,identifiers/unique id

  //snapshot: check if there is an instance of the document that exist inside the db and data access
  const userSnapshot = await getDoc(userDocRef);

  //check if snaphot exists, if not, create an instanc eof it
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};
