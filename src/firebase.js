import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// Firebase config object, ensure it contains all required fields
const config = {
  apiKey: "AIzaSyCINiR7LLI9tXUIDLHDkZtAt-6JASHTDN8",  // Replace with your actual API key
  authDomain: "fir-notification-5c1b1.firebaseapp.com",  // Replace with your actual authDomain
  projectId: "fir-notification-5c1b1",  // Ensure this value is correct
  storageBucket: "fir-notification-5c1b1.appspot.com",  // Replace with your storage bucket
  messagingSenderId: "358086721980",  // Replace with your actual sender ID
  appId: "1:358086721980:web:a52d2bba99b555de246bb9",  // Replace with your app ID
  measurementId: "G-7CGS4C7F74"  // Replace with your measurement ID
};

// Initialize Firebase
const app = initializeApp(config);
const messaging = getMessaging(app);

export { messaging };
