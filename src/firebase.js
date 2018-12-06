const firebase = require('firebase');

const config = {
  apiKey: "AIzaSyANgKdtJOkY1GrAK-3IxAODoDRTG0BlKkk",
  authDomain: "reddit-clone-60c62.firebaseapp.com",
  databaseURL: "https://reddit-clone-60c62.firebaseio.com",
  projectId: "reddit-clone-60c62",
  storageBucket: "reddit-clone-60c62.appspot.com",
  messagingSenderId: "965332741307"
};
firebase.initializeApp(config);

module.exports = firebase;