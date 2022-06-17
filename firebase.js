// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwCcGJzYE2hb1681BUb0gaIPJJJ-NqusU",
  authDomain: "fir-auth-ad555.firebaseapp.com",
  projectId: "fir-auth-ad555",
  storageBucket: "fir-auth-ad555.appspot.com",
  messagingSenderId: "980766422",
  appId: "1:980766422:web:2a389bf0f2d36a6e584377"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}
const auth = firebase.auth()
// const authGoogle = firebase.auth().getAuth(auth);
// const provider = new firebase.auth().GoogleAuthProvider(); 
export { auth };