import firebase from 'firebase';
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyAuueop5DLa1G18jshh7H6WAzbUdZmfey4",
    authDomain: "book-santa-562cd.firebaseapp.com",
    projectId: "book-santa-562cd",
    storageBucket: "book-santa-562cd.appspot.com",
    messagingSenderId: "56504552790",
    appId: "1:56504552790:web:0a1aa2f562dec34ff4daf7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();