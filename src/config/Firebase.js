import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyDUPonMwMa1P0adXiHaWtZHcPpvzwtTAs0",
    authDomain: "reactappusingreduxhakaton.firebaseapp.com",
    databaseURL: "https://reactappusingreduxhakaton-default-rtdb.firebaseio.com",
    projectId: "reactappusingreduxhakaton",
    storageBucket: "reactappusingreduxhakaton.appspot.com",
    messagingSenderId: "801844080933",
    appId: "1:801844080933:web:4b29c5d8e4a8de5f0c2acc"
  };

  
export default firebase.initializeApp(firebaseConfig);