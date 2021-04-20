import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCujWTSoOzmEjSNzprmU3jCMXBGbq4dbUs",
  authDomain: "crown-clothing-96d06.firebaseapp.com",
  projectId: "crown-clothing-96d06",
  storageBucket: "crown-clothing-96d06.appspot.com",
  messagingSenderId: "96343990624",
  appId: "1:96343990624:web:6c65c6c69acbbe69bdfe05",
  measurementId: "G-2NR4R3KQBE",
};

export const createUserProfileDocumnet = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ propmt: "select_account" });

export const signInEithGoogle = () => auth.signInWithPopup(provider);

export default firebase;