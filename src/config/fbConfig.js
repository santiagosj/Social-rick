import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyDasiZrIDW107kxPq93elXPEE-DvzDfFMo",
    authDomain: "social-rick-eb972.firebaseapp.com",
    databaseURL: "https://social-rick-eb972.firebaseio.com",
    projectId: "social-rick-eb972",
    storageBucket: "social-rick-eb972.appspot.com",
    messagingSenderId: "988609765159",
    appId: "1:988609765159:web:8910eb3d35a4f7658a5302"
};
firebase.initializeApp(config);
firebase.firestore()

export default firebase 