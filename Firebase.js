import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
export const firebaseConfig = {
  apiKey: "AIzaSyArWoXy-2p-eFY4x2K5pBafjJTVDDRQPhI",
  authDomain: "bustrack-27015.firebaseapp.com",
  databaseURL: "https://bustrack-27015-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bustrack-27015",
  storageBucket: "bustrack-27015.appspot.com",
  messagingSenderId: "394942805670",
  appId: "1:394942805670:web:4ee531e6ffd7506bafa667"
};

export  const app = initializeApp(firebaseConfig);
export const storageRef = firebase.storage().ref(); 
console.log(typeof storage,"Firebase")