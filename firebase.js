import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-J9AVShiJep8aWHkIAgjXk1nQfxvc3tI",
  authDomain: "team-loc.firebaseapp.com",
  databaseURL: "https://team-loc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "team-loc",
  storageBucket: "team-loc.firebasestorage.app",
  messagingSenderId: "791200789261",
  appId: "1:791200789261:web:f819950d08280219657644"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
