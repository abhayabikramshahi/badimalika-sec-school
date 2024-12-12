
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDdOmPq1Mtp0Iu8gXsyfHhAdgKPSvMwBIU",
    authDomain: "website-shower.firebaseapp.com",
    projectId: "website-shower",
    storageBucket: "website-shower.firebasestorage.app",
    messagingSenderId: "409554350070",
    appId: "1:409554350070:web:8a6e2476750b27e24da1d7",
    measurementId: "G-6BH7HHVBL4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
