import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAE4HBMBpPvOQ6A7RjkfmxfP1arQXWpIpI",
  authDomain: "slack-app-5280e.firebaseapp.com",
  projectId: "slack-app-5280e",
  storageBucket: "slack-app-5280e.appspot.com",
  messagingSenderId: "1080625870354",
  appId: "1:1080625870354:web:a7bd04e7c27e50720ccacb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
