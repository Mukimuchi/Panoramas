// Firebase SDKのインポート
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyABxfwIFdLrxVFJUBjkTk2X-TibWBvek0U",
    authDomain: "mypanoramagallery.firebaseapp.com",
    projectId: "mypanoramagallery",
    storageBucket: "mypanoramagallery.firebasestorage.app",
    messagingSenderId: "846689198376",
    appId: "1:846689198376:web:7fed37ad055be799d5301d",
    measurementId: "G-00V22XD7WK"
};

// Firebaseアプリを初期化
const app = initializeApp(firebaseConfig);

// 各サービスのインスタンスを取得し、エクスポート
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);