
import  firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBmhkV5_xesju_qP5ZlQf0SrAj0xhk10g0",
  authDomain: "raza-stuff.firebaseapp.com",
  databaseURL: "https://raza-stuff-default-rtdb.firebaseio.com",
  projectId: "raza-stuff",
  storageBucket: "raza-stuff.appspot.com",
  messagingSenderId: "628992143595",
  appId: "1:628992143595:web:a96b3f8b83c5e7dc4a8eae"
};

  console.log(firebase)

  firebase.initializeApp(firebaseConfig);
  
    export { firebase as default } 