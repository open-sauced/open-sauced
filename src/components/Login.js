import React, {Component} from "react";
import {loginUser} from "../lib/identityActions";
import {createViewer} from "../queries";
import {graphql} from "react-apollo";
import GitHubLogin from "react-github-login";
import logo from "./logo8.svg";
import {FlexCenter} from "../styles/Grid";

const spacingStyle = {margin: "auto", padding: 100, textAlign: "center"};
const onSuccess = response => {
  loginUser(response);
};

const onFailure = response => console.error(response);

export class Login extends Component {
  // handleLogin = () => {}//netlifyIdentity.open();

  render() {
    return (
      <FlexCenter>
        <div style={spacingStyle}>
          {/* <Button onClick={this.handleLogin}>Login to get saucin</Button> */}
          <img src={logo} alt="logo" />
          <p style={{marginTop: 16}}>The path towards open-source contributions. Login to get Saucin'</p>
          <GitHubLogin
            clientId="add06b2f1ac97fd583a6"
            redirectUri="http://localhost:3000/callback"
            onSuccess={onSuccess}
            onFailure={onFailure}
          />
        </div>
      </FlexCenter>
    );
  }
}

const LoginWithMutation = graphql(createViewer)(Login);

export default LoginWithMutation;
