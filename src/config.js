import OneGraphAuth from "onegraph-auth";

const APP_ID = "e2ce0bcc-b5b6-42b7-a28e-3a6579d69ecd";

const auth = new OneGraphAuth({
  appId: APP_ID
});

// This setup is only needed once per application
const fetchOneGraph = (operationsDoc, operationName, variables) => {
  return fetch(
    "https://serve.onegraph.com/dynamic?app_id=" + APP_ID,
    {
      method: "POST",
      headers: {
        ...auth.authHeaders()
      },
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName
      })
    }
  ).then(res => res.json());
};

export default {auth: auth, appId: APP_ID, fetchOneGraph: fetchOneGraph};
