import React from "react";
import Griddle from "griddle-react";

const Manager = ({data}) => {
  const mappedRepos = data.map((x) => x.toObject());

  return (
    <div className="Manager ui">
      <Griddle
        results={mappedRepos}
        settingsToggleClassName="button button-ui-default"
        showFilter={true}
        showSettings={true}
      />
    </div>
  );
};

export default Manager;

