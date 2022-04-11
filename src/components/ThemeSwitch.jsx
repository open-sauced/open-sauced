import React, {useContext, useState} from "react";
import ThemeContext from "../ThemeContext";
import {FlexCenter} from "../styles/Grid";
import { Switch, SwitchThumb } from "../styles/RadixSwitch";
import systemIsDark from "../lib/systemIsDark";

function ThemeSwitch() {
  const [theme, setTheme] = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(theme === "dark" || (theme === "system" && systemIsDark()));

  const handleClick = () => {
    setIsActive(prevState => !prevState);
    if(isActive) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <FlexCenter style={{marginRight:"0.5rem"}}>
      <Switch
        style={{margin:"0 1rem"}}
        id="s1"
        checked={isActive}
        onClick={handleClick}>
        <SwitchThumb />
      </Switch>
    </FlexCenter>
  );
}
export default ThemeSwitch;
