import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// IMPORTANT: Replace with your actual Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

let app;

// Initialize Firebase only if it hasn't been initialized yet
if (!getApps().length) {
  // Check if all placeholder values have been replaced
  if (Object.values(firebaseConfig).some(value => value.startsWith("YOUR_"))) {
    console.warn("Firebase config is not set. Please update src/lib/firebase.js with your project credentials.");
  }
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const db = getFirestore(app);

export { db };
