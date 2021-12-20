import OneGraphAuth from "onegraph-auth";

const APP_ID = "bc178799-292e-49df-8016-223abf5a07cb";

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

const returnOneGraph = {
    auth,
    appId: APP_ID,
    fetchOneGraph,
};

export default returnOneGraph;
