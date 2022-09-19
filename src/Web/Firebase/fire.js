import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCC8JMm6sjUwA3Bu7sOi1QJQ7Xv2t44rw",
  authDomain: "zelar-practise.firebaseapp.com",
  projectId: "zelar-practise",
  storageBucket: "zelar-practise.appspot.com",
  messagingSenderId: "903370382495",
  appId: "1:903370382495:web:cb08b732fb97315a5c16aa",
};

const app = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(app);


export default firebaseAuth;