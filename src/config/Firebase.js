
import  firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAbKo1pJNu-vYQ0FrqBD3cy2xU0ZqX-Xpw",
    authDomain: "pilot-project-ba3a0.firebaseapp.com",
    databaseURL: "https://pilot-project-ba3a0-default-rtdb.firebaseio.com",
    projectId: "pilot-project-ba3a0",
    storageBucket: "pilot-project-ba3a0.appspot.com",
    messagingSenderId: "215116819786",
    appId: "1:215116819786:web:9110490af9cd30533d65b3"
  };

  console.log(firebase)

  firebase.initializeApp(firebaseConfig);
  
    export { firebase as default } 