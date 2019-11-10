import React from "react";
import Background from "../src/styles/Background";
import Gradient from "../src/styles/Gradient";
import Card from "../src/components/Card";
import Avatar from "../src/styles/Avatar";
import {face} from "../src/images";

export default {
  title: "Primitives",
};

export const GradientBackground = () => (
  <React.Fragment>
    <Gradient>
      <div style={{height: 1024, width: 498}} />
    </Gradient>
  </React.Fragment>
);

export const ProfileAvatar = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <Avatar src={face} alt="profile pic" />
  </Background>
);

export const CardCommponent = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <Card>
      <div style={{minHeight: 35}}>
        <h1>Sample Card</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </Card>
  </Background>
);

export const FittedCardComponent = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <Card fitted>
      <div style={{minHeight: 35}}>
        <h1>Sample Card</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </div>
    </Card>
  </Background>
);
