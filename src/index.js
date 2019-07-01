import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {ApolloProvider, ApolloClient, createNetworkInterface} from "react-apollo";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

const client = new ApolloClient({
  networkInterface: createNetworkInterface({uri: `${process.env.graphcoolEndpoint}`}),
  dataIdFromObject: o => o.id,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root"),
);

registerServiceWorker();
