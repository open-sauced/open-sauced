import React, {Component} from "react";
import Button from "../styles/Button";
import netlifyIdentity from "netlify-identity-widget";
import {createViewer} from "../queries";
import {graphql} from "react-apollo";

export class Login extends Component {
  handleLogin = () => netlifyIdentity.open();

  render() {
    return (
      <div>
        <p>The open-source project to manage your open-source projects</p>
        <Button onClick={this.handleLogin}>Login to get saucin</Button>
      </div>
    );
  }
}

const LoginWithMutation = graphql(createViewer)(Login);

export default LoginWithMutation;
