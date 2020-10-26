import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyB3iV7AyHUzJ06cDvWru_At7mmz3Te241U',
    authDomain: 'cs313-servicetracking.firebaseapp.com',
    databaseURL: 'https://cs313-servicetracking.firebaseio.com',
    projectId: 'cs313-servicetracking',
    storageBucket: 'cs313-servicetracking.appspot.com',
    messagingSenderId: '515101151448',
    appId: '1:515101151448:web:4179fbe0fe31abb6df47ad',
    measurementId: 'G-QM5DTSQSQ3',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
