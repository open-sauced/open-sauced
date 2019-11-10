import React from "react";
import {action} from "@storybook/addon-actions";
import Button from "../src/styles/Button";

export default {
  title: "Button",
};

export const primary = () => (
  <Button primary onClick={action("clicked")}>
    Save
  </Button>
);

export const secondary = () => <Button onClick={action("clicked")}>Cancel</Button>;

export const PrimaryWithText = () => (
  <div>
    <h2 style={{fontFamily: "Roboto", color:"grey", fontSize: "1.0rem"}}>Set goals directly on Github</h2>
    <Button style={{width: "90%"}} primary>View Your Data</Button>
  </div>
);

