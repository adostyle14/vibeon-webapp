
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDbD3sH5CxWaoAf69ZQB1YF3whdRSIIBw",
  authDomain: "vibeon-c32ca.firebaseapp.com",
  projectId: "vibeon-c32ca",
  storageBucket: "vibeon-c32ca.firebasestorage.app",
  messagingSenderId: "164249629570",
  appId: "1:164249629570:web:ec9370dc8e0080d3cf559b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Redirect to login if no user
onAuthStateChanged(auth, user => {
  if (!user) {
    window.location.href = "login.html";
  }
});
