import React from "react";
import {FlexColumnCenter} from "../styles/Grid";
import {MarketingButton} from "../styles/Button";

function Login({handleLogIn}) {
  return (
    <React.Fragment>
      <FlexColumnCenter>
        <p style={{marginTop: 16}}>The path towards open-source contributions.</p>
        <MarketingButton alt="github-login" primary onClick={handleLogIn}>
          Login with GitHub
        </MarketingButton>
      </FlexColumnCenter>
    </React.Fragment>
  );
}

export default Login;
