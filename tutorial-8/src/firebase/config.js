import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWde_OgVHDfxSHZ5YpFQmCslN89LrzQrA",
  authDomain: "udemy-vue-firebase-sites-8b0af.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-8b0af",
  storageBucket: "udemy-vue-firebase-sites-8b0af.appspot.com",
  messagingSenderId: "134920770534",
  appId: "1:134920770534:web:5223ae3088df39e6b2fc27",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
