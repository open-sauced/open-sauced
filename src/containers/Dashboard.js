import React from "react";
import Repository from "../components/Repository";
import Goals from "../components/Goals";
import {Route} from "react-router-dom";

function Repositories({match}) {
  return (
    <React.Fragment>
      <Route exact path={match.url} component={Goals} />
      <Route path={"/repos/:repoOwner/:repoName/:id"} component={Repository} />
    </React.Fragment>
  );
}

export default Repositories;
