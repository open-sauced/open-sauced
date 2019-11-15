import React from "react";
import Repository from "../components/Repository";
import RepositoryGoals from "../components/RepositoryGoals";
import {Route} from "react-router-dom";

function Repositories({match}) {
  return (
    <React.Fragment>
      <Route exact path={match.url} component={RepositoryGoals} />
      <Route path={"/repos/:repoOwner/:repoName/:id"} component={Repository} />
    </React.Fragment>
  );
}

export default Repositories;
