import React from "react";
import logo from "./logo8.svg";
import {FlexColumnCenter} from "../styles/Grid";
import Button from "../styles/Button";

function Login({handleLogIn}) {
  return (
    <FlexColumnCenter>
      <img src={logo} alt="logo" />
      <p style={{marginTop: 16}}>The path towards open-source contributions.</p>
      <Button alt="github-login" primary onClick={handleLogIn}>
        Login with GitHub
      </Button>
    </FlexColumnCenter>
  );
}

export default Login;
