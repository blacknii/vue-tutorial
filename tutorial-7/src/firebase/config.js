import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWde_OgVHDfxSHZ5YpFQmCslN89LrzQrA",
  authDomain: "udemy-vue-firebase-sites-8b0af.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-8b0af",
  storageBucket: "udemy-vue-firebase-sites-8b0af.appspot.com",
  messagingSenderId: "134920770534",
  appId: "1:134920770534:web:c651be52b1666781b2fc27",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp };
