import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyAqYJr_lzFsLfm-1cD2z6kYyY414gFvpWY",
    authDomain: "site-escola-sandra-regina.firebaseapp.com",
    projectId: "site-escola-sandra-regina",
    storageBucket: "site-escola-sandra-regina.firebasestorage.app",
    messagingSenderId: "941122710888",
    appId: "1:941122710888:web:6b18576aae46d68d933add",
    measurementId: "G-0V6NYX42GB"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


export {
    app,
    auth,
    db
};