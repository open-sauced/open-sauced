import OneGraphAuth from "onegraph-auth";

const APP_ID = "e2ce0bcc-b5b6-42b7-a28e-3a6579d69ecd";

const auth = new OneGraphAuth({
  appId: APP_ID
});

export default {auth: auth, appId: APP_ID};
