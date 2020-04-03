import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyCkAy5lpWajhpiNxwTeKTnlvO4PvuqOcog",
        authDomain: "crown-db-1814a.firebaseapp.com",
        databaseURL: "https://crown-db-1814a.firebaseio.com",
        projectId: "crown-db-1814a",
        storageBucket: "crown-db-1814a.appspot.com",
        messagingSenderId: "1034324140768",
        appId: "1:1034324140768:web:effe39fa542c9cfac26685",
        measurementId: "G-YQGMHXDBG9"
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;