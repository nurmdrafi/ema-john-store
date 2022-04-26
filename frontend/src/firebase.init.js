import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxjZ8wKG3Egq7XPeT6vrocFYnYAy5CryI",
  authDomain: "ema-john-d887f.firebaseapp.com",
  projectId: "ema-john-d887f",
  storageBucket: "ema-john-d887f.appspot.com",
  messagingSenderId: "447362153676",
  appId: "1:447362153676:web:62fbb18966a759fae45669"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;