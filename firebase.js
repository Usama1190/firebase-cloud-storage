import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
// import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";


import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBjZKCdDHanbqEUyJSc0cMoZhK8IATfXVU",
    authDomain: "upload-image-on-cloud-storage.firebaseapp.com",
    projectId: "upload-image-on-cloud-storage",
    storageBucket: "upload-image-on-cloud-storage.appspot.com",
    messagingSenderId: "433904030978",
    appId: "1:433904030978:web:0778bbd1989db4cd57de1b",
    measurementId: "G-2MSW88XB72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// export {storage, ref ,uploadBytes}




export {storage, ref ,uploadBytes, uploadBytesResumable, getDownloadURL}
