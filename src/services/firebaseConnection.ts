import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {

    apiKey: "AIzaSyAyTk342XlPSnDOWL-F6wz6yOxyfP4wIRs", 
    authDomain: "boardapp-cb7ac.firebaseapp.com",
    projectId: "boardapp-cb7ac",
    storageBucket: "boardapp-cb7ac.appspot.com",
    messagingSenderId: "514037017550",
    appId: "1:514037017550:web:bf0a2191b854186654199f",
    measurementId: "G-MGQNW775JW"
  
};
  
  
// Initialize Firebase
  
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
 
export default firebase;
  
  
