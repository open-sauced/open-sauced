import React, {Component} from "react";
// import Button from "../styles/Button";
import {loginUser} from "../lib/identityActions";
import {createViewer} from "../queries";
import {graphql} from "react-apollo";
import GitHubLogin from "react-github-login";

const onSuccess = response => {
  loginUser(response);
};

const onFailure = response => console.error(response);

export class Login extends Component {
  // handleLogin = () => {}//netlifyIdentity.open();

  render() {
    return (
      <div>
        <p>The open-source project to manage your open-source projects</p>
        {/* <Button onClick={this.handleLogin}>Login to get saucin</Button> */}
        <GitHubLogin clientId="add06b2f1ac97fd583a6"
          redirectUri="http://localhost:3000/callback"
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
      </div>
    );
  }
}

const LoginWithMutation = graphql(createViewer)(Login);

export default LoginWithMutation;
