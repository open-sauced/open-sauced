import React from "react";
import {Link} from "react-router-dom";
import Button from "./styles/Button";
import HoverWrapper from "./styles/HoverWrapper";

const Instructions = ({allRepositories}) => {
  return allRepositories && allRepositories.length > 0 ?
    <p>Select a repo to see details.</p>
      : <Link to="/new" alt="Add A Repo">
        <HoverWrapper>
          <Button className="button-ui-primary button_hover"><span className="icon-plus" />Track you first Repository</Button>
        </HoverWrapper>
      </Link>;
};

export default Instructions;
