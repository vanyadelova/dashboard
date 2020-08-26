import firebase from "firebase";

// initialize database

const config = {
  apiKey: "AIzaSyAb09TBb8kswSzphYnCcbC5ylr04RJdcxo",
  authDomain: "ngt-task.firebaseapp.com",
  databaseURL: "https://ngt-task.firebaseio.com",
  projectId: "ngt-task",
  storageBucket: "ngt-task.appspot.com",
  messagingSenderId: "188151928902",
  appId: "1:188151928902:web:ff2c139b3e492df74f1247",
  measurementId: "G-4J0PDYLC2R",
};

firebase.initializeApp(config);
export default firebase;
