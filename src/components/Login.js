import React from "react";
import Button from "../styles/Button";
import netlifyIdentity from "netlify-identity-widget";

const login = () => netlifyIdentity.open();
const Login = () => (
  <div>
    <p>The open-source project to manage your open-source projects</p>
    <Button onClick={login}>Login to Open Sauced</Button>
  </div>
);

export default Login;
