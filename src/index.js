/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ApolloProvider,
  createNetworkInterface
} from "react-apollo";
import Config from "./config";
import {getUserFromJwt} from "./lib/identityActions";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import OneGraphApolloClient from 'onegraph-apollo-client';
import OneGraphAuth from 'onegraph-auth';

const apolloClient = new OneGraphApolloClient({
  oneGraphAuth: Config.auth,
});

class Index extends React.Component {
  state = {user: null};

  componentDidMount() {
    const auth = Config.auth;
    auth.isLoggedIn("github").then(isLoggedIn => {
      if (isLoggedIn) {
        const user = getUserFromJwt(auth);
        this.setState({user: user})
      } else {
        console.warn("User is not logged into GitHub");
      }
    });
  }

  _handleLogIn() {
    const auth = Config.auth;
    auth
      .login("github")
      .then(() => {
        auth.isLoggedIn("github").then(isLoggedIn => {
          if (isLoggedIn) {
            // Pull the user-data we care about from the JWT and
            // store it in component local state for the rest of the
            // app
            const user = getUserFromJwt(auth);
            this.setState({user: user});
          } else {
            console.warn("User did not grant auth for GitHub");
          }
        });
      })
      .catch(e => console.error("Problem logging in", e));
  }

  _handleLogOut() {
    const auth = Config.auth;
    auth.logout("github").then(() => {
      // Remove the local onegraph-auth storage
      localStorage.removeItem("oneGraph:" + Config.appId);
      this.setState({user: null})
    });
  }

  render() {
    return (
      <div>
        <ApolloProvider client={apolloClient}>
          <App user={this.state.user}
            userId={this.state.user && this.state.user.id}
            handleLogIn={() => this._handleLogIn()}
            handleLogOut={() => this._handleLogOut()}
          />
        </ApolloProvider>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));

registerServiceWorker();
