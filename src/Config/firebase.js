import  firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC-6XOtYTHW0kDOmrX9ut-nsHpdbfwYAxw",
    authDomain: "olxraplica.firebaseapp.com",
    databaseURL: "https://olxraplica.firebaseio.com",
    projectId: "olxraplica",
    storageBucket: "olxraplica.appspot.com",
    messagingSenderId: "521358241527",
    appId: "1:521358241527:web:1a76c0bfc76e7dfbdb2df2",
    measurementId: "G-XP0YXXYB98"
  };

  export default firebase.initializeApp(firebaseConfig);
  
