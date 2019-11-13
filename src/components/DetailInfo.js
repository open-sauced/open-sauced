import React from "react";
import {FlexCenter} from "../styles/Grid";
import Octicon, {getIconByName} from "@primer/octicons-react";

function DetailInfo({icon, text}) {
  return (
    <FlexCenter style={{width: "100%", flexWrap: "wrap"}}>
      <div style={{width: "30px", color: "grey"}}>
        <Octicon verticalAlign="middle" icon={getIconByName(icon)} />
      </div>
      <div style={{fontSize: "15px", color: "grey"}}>{text}</div>
    </FlexCenter>
  );
}
export default DetailInfo;
