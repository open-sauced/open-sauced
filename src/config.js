import OneGraphAuth from "onegraph-auth";

const APP_ID = "06238984-0a96-4774-95ad-d7b654c980c5";

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
