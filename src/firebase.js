import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBWhDN0q651xpbk2FAALF2gYylM1dxI6PQ",
    authDomain: "whatsapp-clone-react-19312.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-react-19312.firebaseio.com",
    projectId: "whatsapp-clone-react-19312",
    storageBucket: "whatsapp-clone-react-19312.appspot.com",
    messagingSenderId: "80217369500",
    appId: "1:80217369500:web:600fe85b83671a823ff659",
    measurementId: "G-M7WNVTZH83"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
  