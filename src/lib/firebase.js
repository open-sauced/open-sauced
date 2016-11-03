import Firebase from "firebase"
import {fromJS} from "immutable";

const config = {
  apiKey: "AIzaSyClkujwTSCfQE7XKt-miEpgdewcjQ4dxJY",
  authDomain: "open-sauced-a70ba.firebaseapp.com",
  databaseURL: "https://open-sauced-a70ba.firebaseio.com",
  storageBucket: "open-sauced-a70ba.appspot.com",
  messagingSenderId: "299999296753"
};

const store = Firebase.initializeApp(config);

const db = {
  writeRepoData(data) {
    store.database().ref(`/repos/${data.name}`).set(data);
  },

  fetchAllRepoData() {
    const repoData = Firebase.database().ref('/repos/');
    return repoData.once("value", (snapshot) => {
      return snapshot;
    }).then((res) => {
      return fromJS(res.val()).toArray();
    })
  }
};

export default db;
