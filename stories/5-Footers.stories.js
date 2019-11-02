import React, {Fragment} from "react";
import Card from "../src/components/DumbCard";
import Gradient from "../src/styles/Gradient";
import {sauced} from "../src/icons";

export default {
  title: "Footer",
};

export const Basic = () => (
  <Fragment>
    <div style={{paddingRight: 16, float: "right", width: 200}}>
      <img src={sauced} />
    </div>
  </Fragment>
);

export const BasicWithCard = () => (
  <Fragment>
    <Gradient style={{height: 1024, padding: "35px 60px 96px 60px"}}>
      <Card>
        <div style={{height: 800}} />
      </Card>
      <div style={{paddingRight: 16, float: "right", width: 200}}>
        <img src={sauced} />
      </div>
    </Gradient>
  </Fragment>
);
