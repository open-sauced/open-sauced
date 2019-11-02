import React, {Fragment} from "react";
import Gradient from "../src/styles/Gradient";
import Avatar from "../src/styles/Avatar";
import {face} from "../src/images";

export default {
  title: "Primitives",
};

export const GradientBackground = () => (
  <Fragment>
    <Gradient>
      <div style={{height: 1024, width: 498}} />
    </Gradient>
  </Fragment>
);

export const ProfileAvatar = () => (
  <Fragment>
    <Avatar src={face} alt="profile pic" />
  </Fragment>
);
