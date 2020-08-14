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

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

//this was written to add data to firestore
export const addShopCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
   console.log(newDocRef);
   batch.set(newDocRef,obj)
  });
  return await batch.commit();
}


export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;