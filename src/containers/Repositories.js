import React from "react";
import Repository from "./Repository";
import Goals from "../containers/Goals";
import {Route} from "react-router-dom";

function Repositories({match}) {
  return (
    <div className="repositories">
      <Route exact path={match.url} component={Goals} />
      <Route path={"/repos/:repoOwner/:repoName"} component={Repository} />
    </div>
  );
}

export default Repositories;
