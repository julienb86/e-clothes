import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBE82C6OMAW8gcWm3E3ZB0LIJMN4Pzcs_A",
  authDomain: "e-shop-react-526b3.firebaseapp.com",
  databaseURL: "https://e-shop-react-526b3.firebaseio.com",
  projectId: "e-shop-react-526b3",
  storageBucket: "e-shop-react-526b3.appspot.com",
  messagingSenderId: "66657220323",
  appId: "1:66657220323:web:8916c28831fabf98edf7d6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (authUser, additionalData) => {
  if (!authUser) return;

  const userRef = firestore.doc(`users/${authUser.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = authUser;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }
  return userRef;
};
export default firebase;
