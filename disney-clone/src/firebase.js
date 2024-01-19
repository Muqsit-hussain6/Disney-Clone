import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBBBbL79SF3H_UD0r31EifceskowZUTzXc",
  authDomain: "disneyclone-project.firebaseapp.com",
  projectId: "disneyclone-project",
  storageBucket: "disneyclone-project.appspot.com",
  messagingSenderId: "866018398098",
  appId: "1:866018398098:web:3389dc4cef3aac502d3b4b",
  measurementId: "G-STC5YLG19Y"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage, db as default };
