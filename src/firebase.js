import  firebase from "firebase/app";
import 'firebase/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUZjzSGs66N4YIKksu-z-hX28nkLVAuig",
    authDomain: "amado-de-dios.firebaseapp.com",
    databaseURL: "https://amado-de-dios.firebaseio.com",
    projectId: "amado-de-dios",
    storageBucket: "amado-de-dios.appspot.com",
    messagingSenderId: "172807138150",
    appId: "1:172807138150:web:d22e34f2d811123f05f6a7",
    measurementId: "G-DHW76HZGBS"
  };

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();