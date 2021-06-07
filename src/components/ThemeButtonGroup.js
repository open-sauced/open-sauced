import React, {useContext} from "react";
import ThemeContext from "../ThemeContext";
//import Button from "../styles/Button";
import {FlexCenter} from "../styles/Grid";
import darkMode from "../images/darkMode.svg";
import lightMode from "../images/lightMode.svg";
import themeAuto from "../images/themeAuto.svg";
function ThemeButtonGroup() {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <FlexCenter style={{marginRight:"0.5rem"}}>
      <a
        style={{margin:"0 .5rem"}}
        disabled={theme === "dark"}
        onClick={(event) => {
          event.preventDefault();
          setTheme("dark");
        }}>
        <img src={darkMode} alt="dark mode" style={{padding:"0.25rem", borderRadius:"15%", backgroundColor:(theme === "dark") ? "#ccc" : "transparent"}}/>
      </a>
      <a
        style={{margin:"0 .5rem"}}
        disabled={theme === "system"}
        onClick={(event) => {
          event.preventDefault();
          setTheme("system");
        }}>
        <img src={themeAuto} alt="theme auto" style={{padding:"0.25rem", borderRadius:"15%", backgroundColor:(theme === "system") ? "#ccc" : "transparent"}}/>
      </a>
      <a
        style={{margin:"0 .5rem"}}
        disabled={theme === "light"}
        onClick={(event) => {
          event.preventDefault();
          setTheme("light");
        }}>
        <img src={lightMode} alt="light mode" style={{padding:"0.25rem", borderRadius:"15%", backgroundColor:(theme === "light") ? "#ccc" : "transparent"}} />
      </a>
    </FlexCenter>
  );
}
export default ThemeButtonGroup;
