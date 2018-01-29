// Initialize Firebase
import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyAWpKRBIcPQPaf1rWCuHZJarjLJpChCS5g',
  authDomain: 'wedding-rsvp-412e3.firebaseapp.com',
  databaseURL: 'https://wedding-rsvp-412e3.firebaseio.com',
  projectId: 'wedding-rsvp-412e3',
  storageBucket: 'wedding-rsvp-412e3.appspot.com',
  messagingSenderId: '988751422709'
}

let app = firebase.initializeApp(config)
let db = app.database()

export default db
