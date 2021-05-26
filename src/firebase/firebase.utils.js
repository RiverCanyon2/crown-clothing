import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyDe7jybjIz1Amrs2DH0W8bPZzuvZEulZms",
    authDomain: "crown-clothing-6bd7e.firebaseapp.com",
    projectId: "crown-clothing-6bd7e",
    storageBucket: "crown-clothing-6bd7e.appspot.com",
    messagingSenderId: "956879880571",
    appId: "1:956879880571:web:2a67d059409eafdba97dde",
    measurementId: "G-GBV5F7V0VH"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot =  await userRef.get();

      if(!snapShot.exists) {
          const {displayName, email } = userAuth;
          const createdAt = new Date();
          
          try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
          } catch (error) {
              console.log('error creating user', error.message);
          }
      }
      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;