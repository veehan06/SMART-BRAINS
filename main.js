// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm5k6joiawddHvkehBY_cNFZTWyPelnQw",
  authDomain: "smart-brains-9aa51.firebaseapp.com",
  projectId: "smart-brains-9aa51",
  storageBucket: "smart-brains-9aa51.appspot.com",
  messagingSenderId: "184020612704",
  appId: "1:184020612704:web:8d07d9dcdd0b3908283505",
  measurementId: "G-KY2R2018DH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
vg2 = 0;
aa2 = 0;
rc2 = 0;
asdw2 = 0;
ik2 = 0;
ma2 = 0;
sa2 = 0;
asn2 = 0;
function vg1(){
    vg2 = vg2 + 1
    document.getElementById("vg").innerHTML = vg2;
}