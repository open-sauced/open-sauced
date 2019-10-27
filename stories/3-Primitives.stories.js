import React, {Fragment} from "react";
import Gradient from "../src/styles/Gradient";

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
