import React from "react";
import {Link} from "react-router-dom";
import Button from "./styles/Button";

const Instructions = ({allRepositories}) => {
  return allRepositories && allRepositories.length > 0 ?
    <p>Select a repo to see details.</p>
      : <Link to="/new" alt="Add A Repo">
        <Button><span className="icon-plus" />Track you first Repository</Button>
      </Link>;
};

export default Instructions;
