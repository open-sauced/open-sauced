import React, {Fragment} from "react";
import {logo} from "../src/logos";
import {FloatLeft, FloatRight} from "../src/styles/Grid";
import {SubtleLink} from "../src/styles/Typography";
import {AppNav, HomeNav} from "../src/styles/Header";
import {SpaceBetween} from "../src/styles/Grid";

export default {
  title: "Nav",
};

export const HomePage = () => (
  <Fragment>
    <HomeNav>
      <FloatLeft>
        <ul>
          <li>
            <SubtleLink className="nav-link" rel="noreferrer" target="_blank" href="https://dev.to/t/opensauced">Blog</SubtleLink>
          </li>
          <li>
            <SubtleLink className="nav-link" rel="noreferrer" target="_blank" href="https://github.com/open-sauced/open-sauced">GitHub</SubtleLink>
          </li>
          <li>
            <SubtleLink href="#">Subscribe</SubtleLink>
          </li>
          <li>
            <SubtleLink onClick={() => console.log("clicked")}>Login</SubtleLink>
          </li>
        </ul>
      </FloatLeft>

      <FloatRight>
        <SpaceBetween>
          <a href="#">
            <img alt="open sauced" src={logo} />
          </a>
        </SpaceBetween>
      </FloatRight>
    </HomeNav>
  </Fragment>
);

export const App = () => (
  <Fragment>
    <AppNav>
      <FloatLeft>
        <ul>
          <li>
            <SubtleLink className="nav-link" rel="noreferrer" target="_blank" href="https://dev.to/t/opensauced">Blog</SubtleLink>
          </li>
          <li>
            <SubtleLink className="nav-link" rel="noreferrer" target="_blank" href="https://github.com/open-sauced/open-sauced">GitHub</SubtleLink>
          </li>
          <li>
            <SubtleLink href="#">Subscribe</SubtleLink>
          </li>
          <li>
            <SubtleLink className="nav-link" rel="noreferrer" target="_blank" href="https://github.com/open-sauced/open-sauced/issues/new">
              Issue
            </SubtleLink>
          </li>
          <li>
            <SubtleLink onClick={() => console.log("clicked")}>Logout</SubtleLink>
          </li>
        </ul>
      </FloatLeft>

      <FloatRight>
        <SpaceBetween>
          <SubtleLink alt="user login name" className="nav-link" href="#">
            <span title="login name">Hi, 0x8a33!</span>
          </SubtleLink>
          <a href="#">
            <img alt="open sauced" src={logo} />
          </a>
        </SpaceBetween>
      </FloatRight>
    </AppNav>
  </Fragment>
);
