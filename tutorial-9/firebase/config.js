import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZjRT-ka3-lWNXe_9-XUFKXqZ4sdPqjDA",
  authDomain: "muso-ninjas-ce989.firebaseapp.com",
  projectId: "muso-ninjas-ce989",
  storageBucket: "muso-ninjas-ce989.appspot.com",
  messagingSenderId: "785770084254",
  appId: "1:785770084254:web:f11f5f7c175e148536888f",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
