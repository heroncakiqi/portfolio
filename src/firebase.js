
import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDHxs1faDfQ3GiH9IXdtUHXgRWqv9LHb9g",
  authDomain: "portfolio-c3e53.firebaseapp.com",
  databaseURL: "https://portfolio-c3e53.firebaseio.com",
  projectId: "portfolio-c3e53",
  storageBucket: "portfolio-c3e53.appspot.com",
  messagingSenderId: "827178433379",
  appId: "1:827178433379:web:19ce41dae9484beaba3156",
  measurementId: "G-LGYCC77T70"
};
firebase.initializeApp(config);

const db = firebase.firestore();

export default db;