import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAgH7d_RZvFdXJmCEMJrW4JyIMYhtAjbiU",
    authDomain: "cooking-ninja-site-f8eb9.firebaseapp.com",
    projectId: "cooking-ninja-site-f8eb9",
    storageBucket: "cooking-ninja-site-f8eb9.appspot.com",
    messagingSenderId: "668343902888",
    appId: "1:668343902888:web:079ce3e7d5a5073af2189d"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore()
export { projectFirestore }
