// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdWfw3SpJqdrPpaJtJWprWntxmIeVKtko",
  authDomain: "authapp-f6a22.firebaseapp.com",
  projectId: "authapp-f6a22",
  storageBucket: "authapp-f6a22.appspot.com",
  messagingSenderId: "429008854492",
  appId: "1:429008854492:web:82eed1b7c3f4e225078319",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
