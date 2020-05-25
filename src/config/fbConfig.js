//import firebase from 'firebase/app';
//import 'firebase/firestore';
//import 'firebase/auth';
//import 'firebase/storage'
import * as firebase from "firebase";

// Replace this with your own config details
var config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_BASEURL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};
firebase.initializeApp(config);
firebase.firestore()

export const auth = firebase.auth();
export const f = firebase;
// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = firebase.storage();
// Create a storage reference from our storage service
export const storageRef = storage.ref();
export const database = firebase.firestore();

export default firebase 

