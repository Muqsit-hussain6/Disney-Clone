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
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProider();
  const storage = firebase.storage();

  export {auth , provider , storage};
  export default db ;