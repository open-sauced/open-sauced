import React from "react";
import {action} from "@storybook/addon-actions";
import {PencilIcon} from "@primer/octicons-react";

import Button from "../src/styles/Button";
import {plus} from "../src/icons";

export default {
  title: "Button",
};

export const primary = () => (
  <Button primary onClick={action("clicked")}>
    Save
  </Button>
);

export const PrimaryWithText = () => (
  <div>
    <h2 style={{fontFamily: "Roboto", color: "grey", fontSize: "1.0rem"}}>Set goals directly on Github</h2>
    <Button primary>View Your Data</Button>
  </div>
);

export const secondary = () => <Button onClick={action("clicked")}>Cancel</Button>;

export const secondaryWithImageAndText = () => (
  <div>
    <Button>
      <PencilIcon verticalAlign="middle" />
      Edit Notes
    </Button>
  </div>
);

export const addTo = () => (
  <div>
    <a onClick={action("goal creation simulated")} href="#">
      <img alt="pointing right icon" src={plus} />
    </a>
  </div>
);
