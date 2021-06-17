import React from "react";
import Background from "../src/styles/Background";
import Avatar from "../src/styles/Avatar";
import {face} from "../src/images";
import darkMode from "../src/images/darkMode.svg";
import lightMode from "../src/images/lightMode.svg";
import themeAuto from "../src/images/themeAuto.svg";

export default {
  title: "Primitives",
};

export const ProfileAvatar = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <Avatar style={{width: "40px"}} src={face} alt="profile pic" />
  </Background>
);

export const DarkMode = () => (
  <a
    style={{margin:"0 .5rem"}}>
      <img src={darkMode} alt="dark mode" style={{padding:"0.25rem", borderRadius:"15%"}}/>
  </a>
)

export const ThemeAuto = () => (
  <a
    style={{margin:"0 .5rem"}}>
    <img src={themeAuto} alt="theme auto" style={{padding:"0.25rem", borderRadius:"15%", width: "1%", height: "1%"}}/>
  </a>

)

export const LightMode = () => (
  <a
   style={{margin:"0 .5rem"}}>
    <img src={lightMode} alt="light mode" style={{padding:"0.25rem", borderRadius:"15%"}} />
  </a>
)