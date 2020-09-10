import firebase from 'firebase';

// Config of the firebase
const firebaseConfig = {
  apiKey: "AIzaSyDS_HpucCJkShqkghn4vNXa07o_9Hvgz8M",
  authDomain: "clone-6de06.firebaseapp.com",
  databaseURL: "https://clone-6de06.firebaseio.com",
  projectId: "clone-6de06",
  storageBucket: "clone-6de06.appspot.com",
  messagingSenderId: "86666838512",
  appId: "1:86666838512:web:1008eb1853a1550acc1d35",
  measurementId: "G-D7L521ZRTQ"
};

// initialize the app with firebase congfig
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initialize the firebase database
const db = firebaseApp.firestore();

//initialize auth
const auth =  firebase.auth();

export {db, auth};
