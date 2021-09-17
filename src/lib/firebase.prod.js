import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDsEUnibN_D19kW784kItktMwKsWU-1ef4",
  authDomain: "netflixclone-33c99.firebaseapp.com",
  projectId: "netflixclone-33c99",
  storageBucket: "netflixclone-33c99.appspot.com",
  messagingSenderId: "1075017011552",
  appId: "1:1075017011552:web:dfb2c8193e9b7549ea0e05",
  measurementId: "G-BGW2WK5S31"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
