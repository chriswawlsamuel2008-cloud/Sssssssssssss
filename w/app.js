// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  setDoc 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDMzEwys8RxGsehCJ2VlrnJeiAa_WY9Lgc",
  authDomain: "sgwen-x.firebaseapp.com",
  projectId: "sgwen-x",
  storageBucket: "sgwen-x.firebasestorage.app",
  messagingSenderId: "387668410002",
  appId: "1:387668410002:web:9479ebf474a151ebcbf04b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Register function
document.getElementById("registerBtn").addEventListener("click", async () => {
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const phone = document.getElementById("regPhone").value.trim();
  const role = document.getElementById("regRole").value;
  const password = document.getElementById("regPass").value;

  if (!name || !email || !phone || !role || !password) {
    alert("Please fill all fields");
    return;
  }

  try {
    // Create account
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCred.user;

    // Save user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email,
      phone: phone,
      role: role,
      isAdmin: false,
      createdAt: new Date()
    });

    alert("Account created successfully!");
    window.location.href = "login.html";

  } catch (error) {
    alert(error.message);
  }
});