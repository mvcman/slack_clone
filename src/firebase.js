import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCkeLvvqEPebPuHUoo3VuZ5Wo6vrocRiCA",
    authDomain: "slack-clone-6a06f.firebaseapp.com",
    databaseURL: "https://slack-clone-6a06f.firebaseio.com",
    projectId: "slack-clone-6a06f",
    storageBucket: "slack-clone-6a06f.appspot.com",
    messagingSenderId: "629430235638",
    appId: "1:629430235638:web:9ef2d51a842439633517d7",
    measurementId: "G-NPJD6HM1YH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;