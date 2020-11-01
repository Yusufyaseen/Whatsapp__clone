import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCoR1eu0WFUPkJBL9zhlMY3BY634QXiH6E",
  authDomain: "whatsapp-91c6b.firebaseapp.com",
  databaseURL: "https://whatsapp-91c6b.firebaseio.com",
  projectId: "whatsapp-91c6b",
  storageBucket: "whatsapp-91c6b.appspot.com",
  messagingSenderId: "826734956233",
  appId: "1:826734956233:web:488433945dc4a759d6c718",
  measurementId: "G-W7JX3X7372",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
