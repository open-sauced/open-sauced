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
const repoData = Firebase.database().ref('/repos/');

const db = {
  writeRepoData(data) {
    store.database().ref(`/repos/${data.name}`).set(data);
  },

  fetchAllRepoData(data) {
    return repoData.on("value", (snapshot) => {
      return snapshot;
    }).then((res) => {
      const data = fromJS(res.val()).toArray();
      console.log(data)
      return data;
    })
  }
};

export default db;
