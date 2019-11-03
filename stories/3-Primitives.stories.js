import React from "react";
import Background from "../src/styles/Background";
import Gradient from "../src/styles/Gradient";
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
