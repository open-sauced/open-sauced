import React, {useContext} from "react";
import ThemeContext from "../ThemeContext";
//import Button from "../styles/Button";
import {FlexCenter} from "../styles/Grid";
function ThemeButtonGroup() {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <FlexCenter>
      <button
        disabled={theme === "dark"}
        onClick={() => setTheme("dark")}
        style={{backgroundColor: "#111", color:"#e0e0e0"}}>Dark
      </button>
      <button
        disabled={theme === "light"}
        onClick={() => setTheme("light")}
        style={{backgroundColor: "#e0e0e0", color:"#111"}}>Light
      </button>
      <button
        disabled={theme === "system"}
        onClick={() => setTheme("system")}
        style={{backgroundColor: "#e0e0e0", color:"#111"}}>System
      </button>
    </FlexCenter>
  );
}
export default ThemeButtonGroup;
