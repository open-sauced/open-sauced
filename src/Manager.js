import React from "react";
import Griddle from "griddle-react";

const Manager = ({data}) => {
  return (
    <div className="Manager ui">
      <Griddle
        results={data}
        settingsToggleClassName="button button-ui-default"
        showFilter={true}
        showSettings={true}
      />
    </div>
  );
};

export default Manager;

