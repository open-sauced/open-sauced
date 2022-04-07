import React from "react";
import Background from "../src/styles/Background";
import Avatar from "../src/styles/Avatar";
import { Switch, SwitchThumb } from "../src/styles/RadixSwitch";
import {face} from "../src/images";
import darkMode from "../src/images/darkMode.svg";
import lightMode from "../src/images/lightMode.svg";
import themeAuto from "../src/images/themeAuto.svg";
import {ButtonBoard} from "../src/styles/Card";
import {Flex} from "../src/styles/Grid";
import {npm} from "../src/images";

export default {
  title: "Miscellaneous"
};

export const ProfileAvatar = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <Avatar style={{width: "40px"}} src={face} alt="profile pic" />
  </Background>
);

export const ThemeSwitch = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <Switch
      style={{margin:"0 1rem"}}
      id="s1">
      <SwitchThumb />
    </Switch>
  </Background>
);

export const DarkMode = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <a
      style={{margin:"0 .5rem"}}>
      <img src={darkMode} alt="dark mode" style={{padding:"0.25rem", borderRadius:"15%"}}/>
    </a>
  </Background>
);

export const ThemeAuto = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <a
      style={{margin:"0 .5rem"}}>
      <img src={themeAuto} alt="theme auto" style={{padding:"0.25rem", borderRadius:"15%", width: "24px", height: "24px"}}/>
    </a>
  </Background>
);

export const LightMode = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <a
      style={{margin:"0 .5rem"}}>
      <img src={lightMode} alt="light mode" style={{padding:"0.25rem", borderRadius:"15%"}} />
    </a>
  </Background>
);

export const Contributors = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <Flex>
      <ButtonBoard>
        <span>
          <h3>Contributors</h3>
          <div className="contributors">
            <a rel="noreferrer" target="_blank">
              <img
                className="users"
                style={{height: "28px", borderRadius: "28px"}}
                src={npm}
              />
            </a>
            <a rel="noreferrer" target="_blank">
              <img
                className="users"
                style={{height: "28px", borderRadius: "28px"}}
                src={npm}
              />
            </a>
            <a rel="noreferrer" target="_blank">
              <img
                className="users"
                style={{height: "28px", borderRadius: "28px"}}
                src={npm}
              />
            </a>
            <a rel="noreferrer" target="_blank">
              <img
                className="users"
                style={{height: "28px", borderRadius: "28px"}}
                src={npm}
              />
            </a>
            <a rel="noreferrer" target="_blank">
              <img
                className="users"
                style={{height: "28px", borderRadius: "28px"}}
                src={npm}
              />
            </a>
            <a rel="noreferrer" target="_blank">
              more...
            </a>
          </div>
        </span>
      </ButtonBoard>
    </Flex>
  </Background>
);
