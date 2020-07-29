import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDRTvgTDQ-6AGY4tiH3Jm6P4b4Lhbf3v6o",
    authDomain: "react-ecom-5769f.firebaseapp.com",
    databaseURL: "https://react-ecom-5769f.firebaseio.com",
    projectId: "react-ecom-5769f",
    storageBucket: "react-ecom-5769f.appspot.com",
    messagingSenderId: "229139472240",
    appId: "1:229139472240:web:d02e77b23536731a1ef9b5",
    measurementId: "G-TMDT1FP6Y5"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;