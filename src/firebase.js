import firebase from 'firebase';
import "firebase/firestore";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBzNQgyyOL2UzZ6boyh3qtorGtWuxDserI",
  authDomain: "react-myapp-2fe0a.firebaseapp.com",
  databaseURL: "https://react-myapp-2fe0a.firebaseio.com",
  projectId: "react-myapp-2fe0a",
  storageBucket: "react-myapp-2fe0a.appspot.com",
  messagingSenderId: "588521489489",
  appId: "1:588521489489:web:e2af5f42105467d8666470",
  measurementId: "G-XFWKD0RMK9"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export default firebase;
