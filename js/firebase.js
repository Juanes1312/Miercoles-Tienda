  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyArj1WafLliNQZWBYZXfCTCjDGgjkO9_rQ",
    authDomain: "juantienda-4a94f.firebaseapp.com",
    projectId: "juantienda-4a94f",
    storageBucket: "juantienda-4a94f.appspot.com",
    messagingSenderId: "79077440246",
    appId: "1:79077440246:web:e6c2248b23752f63174ad7",
    measurementId: "G-SBG42D06BE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
