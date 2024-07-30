import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDssGNyvksWzqK6OzmIjsgmMIOF2zfVTsA",
    authDomain: "notesapp-dadfb.firebaseapp.com",
    projectId: "notesapp-dadfb",
    storageBucket: "notesapp-dadfb.appspot.com",
    messagingSenderId: "645106120661",
    appId: "1:645106120661:web:bf489fa0ee5b7b3f472f5c"
  };

const app = initializeApp(firebaseConfig);

export default app;