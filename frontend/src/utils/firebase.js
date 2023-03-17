import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "funtube-9aa98.firebaseapp.com",
  projectId: "funtube-9aa98",
  storageBucket: "funtube-9aa98.appspot.com",
  messagingSenderId: "864879045859",
  appId: "1:864879045859:web:0ff341c86131a31e1269d6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
