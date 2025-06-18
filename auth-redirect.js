
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDbD3sH5CxWaoAf69ZQB1YF3whdRSIIBw",
  authDomain: "vibeon-c32ca.firebaseapp.com",
  projectId: "vibeon-c32ca",
  storageBucket: "vibeon-c32ca.appspot.com",
  messagingSenderId: "164249629570",
  appId: "1:164249629570:web:ec9370dc8e0080d3cf559b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);
    if (!snap.exists()) {
      window.location.href = "complete-profile.html";
    }
  } else {
    window.location.href = "login.html";
  }
});
