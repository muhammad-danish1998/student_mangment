import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux'
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
import {composeWithDevTools} from 'redux-devtools-extension';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore
 
const fbConfig = {
    apiKey: "AIzaSyAe9k6EWSx_x1yf1Pz24iTL5oaZjJu2y5Q",
    authDomain: "studentbase-23a8a.firebaseapp.com",
    databaseURL: "https://studentbase-23a8a.firebaseio.com",
    projectId: "studentbase-23a8a",
    storageBucket: "studentbase-23a8a.appspot.com",
    messagingSenderId: "840854006961",
    appId: "1:840854006961:web:843ac835f2869018dec690",
    measurementId: "G-B4VQZR215B",

}
 
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
 
// Initialize firebase instance
firebase.initializeApp(fbConfig)
 
// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable
 
// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
})
 
// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState , composeWithDevTools())
 
export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

export default store