import Firebase from "firebase"

const config = {
  apiKey: "AIzaSyClkujwTSCfQE7XKt-miEpgdewcjQ4dxJY",
  authDomain: "open-sauced-a70ba.firebaseapp.com",
  databaseURL: "https://open-sauced-a70ba.firebaseio.com",
  storageBucket: "open-sauced-a70ba.appspot.com",
  messagingSenderId: "299999296753"
};

const store = Firebase.initializeApp(config);

const db = {
  writeUserData(data) {
    store.database().ref(`/repos/${data.name}`).set(data);
  }
};

export default db;
