// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZrsC3mBZGq_oA-8XgbcjBtE6LGHPhn_o",
    authDomain: "taskla-97435.firebaseapp.com",
    projectId: "taskla-97435",
    storageBucket: "taskla-97435.appspot.com",
    messagingSenderId: "934608368895",
    appId: "1:934608368895:web:c39cacce1f2f0cd19888ca"

    // measurementId: process.env.REACT_APP_measurementId,

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;