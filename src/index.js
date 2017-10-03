import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ApolloClient, {createNetworkInterface} from "apollo-client";
import {ApolloProvider} from "react-apollo";
import "./index.css";
import netlifyIdentity from "netlify-identity-widget";

netlifyIdentity.init();

const client = new ApolloClient({
  networkInterface: createNetworkInterface({uri: `${process.env.graphcoolEndpoint}`}),
  dataIdFromObject: (o) => o.id
});

ReactDOM.render((
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  ),
  document.getElementById("root")
);
