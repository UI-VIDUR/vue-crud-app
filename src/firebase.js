import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUO1gyCJcxMYzirm7oagzgJNWcEFTBmag",
    authDomain: "crud-app-259e8.firebaseapp.com",
    projectId: "crud-app-259e8",
    storageBucket: "crud-app-259e8.appspot.com",
    messagingSenderId: "809181891404",
    appId: "1:809181891404:web:5b3927a3350da0310c5de9"
};

firebase.initializeApp(firebaseConfig)

// utils

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

// collection ref

const userCollection = db.collection('users')
const gamesCollection = db.collection('games')

export {
    db,
    auth,
    storage,
    userCollection,
    gamesCollection
}