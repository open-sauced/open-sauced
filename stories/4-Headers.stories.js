import React, {Fragment} from "react";
import Card from "../src/components/Card";
import Gradient from "../src/styles/Gradient";
import Avatar from "../src/styles/Avatar";
import {FlexHeader} from "../src/styles/Grid";
import {Heading, SubHeading} from "../src/styles/Header";
import {anchorWithBorder} from "../src/icons";
import {face} from "../src/images";

export default {
  title: "Header",
};

export const Basic = () => (
  <Fragment>
    <Gradient style={{height: 1024, padding: "35px 60px 96px 60px"}}>
      <FlexHeader>
        <Heading>
          <span>
            <img src={anchorWithBorder} />
          </span>
          Dashboard
        </Heading>
        <Avatar src={face} alt="profile pic" />
      </FlexHeader>
      <SubHeading>
        <li>dashboard</li>
        <li>profile</li>
        <li>forks</li>
      </SubHeading>
    </Gradient>
  </Fragment>
);

export const BasicWithCard = () => (
  <Fragment>
    <Gradient style={{height: 1024, padding: "35px 60px 96px 60px"}}>
      <FlexHeader>
        <Heading>
          <span>
            <img src={anchorWithBorder} />
          </span>
          Dashboard
        </Heading>
        <Avatar src={face} alt="profile pic" />
      </FlexHeader>
      <SubHeading>
        <li>dashboard</li>
        <li>profile</li>
        <li>forks</li>
      </SubHeading>
      <Card>
        <div style={{height: 800}}/>
      </Card>
    </Gradient>
  </Fragment>
);
