import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCHII_qcnodHvwDJwZ2seqvH6X3c_2E3CQ",
    authDomain: "construction-company-31f71.firebaseapp.com",
    databaseURL: "https://construction-company-31f71-default-rtdb.firebaseio.com",
    projectId: "construction-company-31f71",
    storageBucket: "construction-company-31f71.appspot.com",
    messagingSenderId: "928451478704",
    appId: "1:928451478704:web:ee3b14f979840691406775"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);