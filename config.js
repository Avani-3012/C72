
import firebase from 'firebase';
require('@firebase/firestore')

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDvdap5Gy07Le_G8HRLWQ8Xg0EItjqDBdc",
  authDomain: "storyhub-4f5eb.firebaseapp.com",
  databaseURL: "https://storyhub-4f5eb-default-rtdb.firebaseio.com",
  projectId: "storyhub-4f5eb",
  storageBucket: "storyhub-4f5eb.appspot.com",
  messagingSenderId: "529442986250",
  appId: "1:529442986250:web:1364bc8a9b776047ddc2f3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();