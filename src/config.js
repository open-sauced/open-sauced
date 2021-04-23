import OneGraphAuth from "onegraph-auth";

const PRODUCTION_APP_ID = "bc178799-292e-49df-8016-223abf5a07cb"
const DEVELOPMENT_APP_ID = "1fd08c2a-5951-4a29-8078-02f98f06eda4"

const APP_ID = process.env.NODE_ENV === "production" ? PRODUCTION_APP_ID : DEVELOPMENT_APP_ID;

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
