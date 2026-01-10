// Firebase core
import { initializeApp } from "firebase/app";

// Firebase services you are USING
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// (Optional) Analytics — safe only in browser
import { getAnalytics } from "firebase/analytics";

// 🔹 Firebase configuration (YOUR PROJECT)
const firebaseConfig = {
  apiKey: "AIzaSyDE3sdmPG3TGKV0CJDWHYPzDRE-8OKIanw",
  authDomain: "hs-expensemanager.firebaseapp.com",
  projectId: "hs-expensemanager",
  storageBucket: "hs-expensemanager.firebasestorage.app",
  messagingSenderId: "500261749602",
  appId: "1:500261749602:web:9840d9da48d8ace202223b",
  measurementId: "G-PFS0S1EKBC"
};

// 🔹 Initialize Firebase (ONLY ONCE)
const app = initializeApp(firebaseConfig);

// 🔹 Export services (USED by React)
export const auth = getAuth(app);
export const db = getFirestore(app);

// 🔹 Analytics (optional, browser only)
export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;

export default app;
