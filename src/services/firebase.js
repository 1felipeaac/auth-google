
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA2ik3jGLOM0E23sme5f1O-PA_IwUd921c",
  authDomain: "auth-61e3f.firebaseapp.com",
  projectId: "auth-61e3f",
  storageBucket: "auth-61e3f.appspot.com",
  messagingSenderId: "439219431082",
  appId: "1:439219431082:web:bd8875fca25bc863f1d2d3"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);