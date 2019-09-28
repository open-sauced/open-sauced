import React from "react";
import logo from "./logo8.svg";
import {FlexCenter} from "../styles/Grid";
import Button from "../styles/Button";

const spacingStyle = {margin: "auto", padding: 100, textAlign: "center"};

function Login({handleLogIn}) {
  return (
    <FlexCenter>
      <div style={spacingStyle}>
        <img src={logo} alt="logo" />
        <p style={{marginTop: 16}}>The path towards open-source contributions.</p>
        <Button onClick={handleLogIn}>Login with GitHub</Button>
      </div>
    </FlexCenter>
  );
}

export default Login;
