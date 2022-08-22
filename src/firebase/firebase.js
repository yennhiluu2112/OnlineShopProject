import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    onAuthStateChanged,
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword,
    signOut  
} from 'firebase/auth';
import { 
    getDatabase,
    ref as firebaseDatabaseRef,
    set as firebaseSet,
    update as firebaseUpdate,
    onValue as firebaseRead
} from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyC7LuQxg6ItS4W3oWrM05BYE5aTscqP8Wg",
    projectId: "onlineshopapp-d9c16",
    authDomain: "onlineshopapp-d9c16.firebaseapp.com",
    databaseURL: "https://onlineshopapp-d9c16-default-rtdb.firebaseio.com",
    storageBucket: "onlineshopapp-d9c16.appspot.com",
    appId: "1:95755591958:android:3471264e56c50108c8f037",
    messagingSenderId:"95755591958"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const firebaseDatabase = getDatabase()

export {
    auth,
    firebaseDatabase,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    firebaseDatabaseRef,
    firebaseSet,
    firebaseUpdate,
    firebaseRead
}