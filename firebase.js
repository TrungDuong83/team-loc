<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA-J9AVShiJep8aWHkIAgjXk1nQfxvc3tI",
    authDomain: "team-loc.firebaseapp.com",
    databaseURL: "https://team-loc-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "team-loc",
    storageBucket: "team-loc.firebasestorage.app",
    messagingSenderId: "791200789261",
    appId: "1:791200789261:web:f819950d08280219657644",
    measurementId: "G-YVXSTZWKL9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getAnalytics(app);

</script>
