import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCaHzxAqMB6sgoF4dALX82qYokEvpDZuTY",
  authDomain: "jamstack-firebase-firestore.firebaseapp.com",
  databaseURL: "https://jamstack-firebase-firestore.firebaseio.com",
  projectId: "jamstack-firebase-firestore",
  storageBucket: "jamstack-firebase-firestore.appspot.com",
  messagingSenderId: "148840169297",
  appId: "1:148840169297:web:c61be1f5c103fd62515d70",
  measurementId: "G-227B79VXEZ",
};

var fire = firebase.initializeApp(firebaseConfig);

export default fire;
