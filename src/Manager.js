import React from "react";
import Griddle from "griddle-react";

const Manager = ({data}) => {
  const mappedRepos = data.map((x) => x.toObject());

  // return <Griddle results={mappedRepos} />
  return <Griddle results={mappedRepos} tableClassName="table" showFilter={true}
 showSettings={true} />}

export default Manager;

