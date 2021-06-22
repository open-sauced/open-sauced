import React, {Fragment} from "react";
import {logo} from "../src/logos";
import {FloatLeft, FloatRight} from "../src/styles/Grid";
import {SubtleLink} from "../src/styles/Typography";
import {AppNav, HomeNav} from "../src/styles/Header";
import {SpaceBetween} from "../src/styles/Grid";
import darkMode from "../src/images/darkMode.svg";
import lightMode from "../src/images/lightMode.svg";
import themeAuto from "../src/images/themeAuto.svg";
import Avatar from "../src/styles/Avatar";
import {face} from "../src/images";

export default {
  title: "Nav",
};

export const HomePage = () => (
  <Fragment>
    <HomeNav>
      <FloatLeft>
        <a href="#">
          <img alt="open sauced" src={logo} />
        </a>
        <ul>
          <li>
            <SubtleLink className="nav-link" rel="noreferrer" target="_blank" href="https://dev.to/t/opensauced">Blog</SubtleLink>
          </li>
          <li>
            <SubtleLink className="nav-link" rel="noreferrer" target="_blank" href="https://github.com/open-sauced/open-sauced">GitHub</SubtleLink>
          </li>
          <li>
            <SubtleLink className="nav-link" rel="noreferrer" target="_blank" href="https://discord.gg/U2peSNf23P">Discord</SubtleLink>
          </li>
          <li>
            <SubtleLink onClick={() => console.log("clicked")}>Login</SubtleLink>
          </li>
        </ul>
      </FloatLeft>

      <FloatRight>
        <a
          style={{margin:"0 .5rem"}}>
          <img src={darkMode} alt="dark mode" style={{padding:"0.25rem", borderRadius:"15%"}}/>
        </a>
        <a
          style={{margin:"0 .5rem"}}>
          <img src={themeAuto} alt="theme auto" style={{padding:"0.25rem", borderRadius:"15%"}}/>
        </a>
        <a
          style={{margin:"0 .5rem"}}>
          <img src={lightMode} alt="light mode" style={{padding:"0.25rem", borderRadius:"15%"}} />
        </a>
      </FloatRight>
    </HomeNav>
  </Fragment>
);

export const App = () => (
  <Fragment>
    <AppNav>
      <FloatLeft>
        <a href="#">
          <img alt="open sauced" src={logo} />
        </a>
        <ul>
          <li>
            <SubtleLink className="nav-link" rel="noreferrer" target="_blank" href="https://dev.to/t/opensauced">Blog</SubtleLink>
          </li>
          <li>
            <SubtleLink className="nav-link" rel="noreferrer" target="_blank" href="https://github.com/open-sauced/open-sauced">GitHub</SubtleLink>
          </li>
          <li>
            <SubtleLink className="nav-link" rel="noreferrer" target="_blank" href="https://discord.gg/U2peSNf23P">Discord</SubtleLink>
          </li>
          <li>
            <SubtleLink className="nav-link" rel="noreferrer" target="_blank" href="https://github.com/open-sauced/open-sauced/issues/new/choose">
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
          <a
            style={{margin:"0 .5rem"}}>
            <img src={darkMode} alt="dark mode" style={{padding:"0.25rem", borderRadius:"15%"}}/>
          </a>
          <a
            style={{margin:"0 .5rem"}}>
            <img src={themeAuto} alt="theme auto" style={{padding:"0.25rem", borderRadius:"15%"}}/>
          </a>
          <a
            style={{margin:"0 .5rem"}}>
            <img src={lightMode} alt="light mode" style={{padding:"0.25rem", borderRadius:"15%"}} />
          </a>
          <Avatar src={face} alt="profile pic" />
        </SpaceBetween>
      </FloatRight>
    </AppNav>
  </Fragment>
);
