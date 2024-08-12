// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfYX42MwB7F9XSrveCbRgAGjWVZmFFTXg",
  authDomain: "iysf-web.firebaseapp.com",
  projectId: "iysf-web",
  storageBucket: "iysf-web.appspot.com",
  messagingSenderId: "697703403455",
  appId: "1:697703403455:web:51def71c02bde1905d9b0a",
  measurementId: "G-0008W7SHNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const analytics = getAnalytics(app);

export {
  db,
  analytics,
};