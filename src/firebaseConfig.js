// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
  import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBri_Td0rNwFj9pxd7TdwBSWcl8csO13HU",
  authDomain: "linkdin-firebaseclone.firebaseapp.com",
  projectId: "linkdin-firebaseclone",
  storageBucket: "linkdin-firebaseclone.appspot.com",
  messagingSenderId: "359336046151",
  appId: "1:359336046151:web:90acfec96e0aaef438cb62"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
   const auth=getAuth(app)
 export {app,auth}
