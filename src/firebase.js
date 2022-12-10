// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnq7Vk4EbR6wqMDS9HIuyeMNWdjq10G1E",
  authDomain: "ericd-english-grammar.firebaseapp.com",
  projectId: "ericd-english-grammar",
  storageBucket: "ericd-english-grammar.appspot.com",
  messagingSenderId: "510830567908",
  appId: "1:510830567908:web:db897119e79d29090be7f1",
  measurementId: "G-3SCP9D228E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

/*try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}*/

/*onSnapshot(doc(db, "grammar", "verbs"), (doc) => {
  console.log("current data: ", doc.data());
});

onSnapshot(collection(db, "grammar"), (doc) => {
  console.log("current data: ", doc);
});*/

console.log("firebase initialized");
//export default db;
//const analytics = getAnalytics(app);
