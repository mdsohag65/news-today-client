// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFz7lNSQMhGsN3x0v0hJJCEGFZixm-Ods",
    authDomain: "news-today-d3ee5.firebaseapp.com",
    projectId: "news-today-d3ee5",
    storageBucket: "news-today-d3ee5.appspot.com",
    messagingSenderId: "625250546245",
    appId: "1:625250546245:web:fa59c6f7aa9b356951a92c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;