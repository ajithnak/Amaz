import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   
    apiKey: "AIzaSyAAeASPKyLu9ELQZuBSbQcpTo6FWVLqKmY",
    authDomain: "clone-21d0d.firebaseapp.com",
    projectId: "clone-21d0d",
    storageBucket: "clone-21d0d.appspot.com",
    messagingSenderId: "656617753205",
    appId: "1:656617753205:web:4173b91f8567f2a864063c",
    measurementId: "G-T3LEYXR1PJ"
  
});
var db = firebase.firestore();
const auth = firebase.auth();
export { auth, db };