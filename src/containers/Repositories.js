import React from "react";
import Repository from "./Repository";
import Goals from "../containers/Goals";
import {Route} from "react-router-dom";

function content() {
  <div className="landing-nav">
    <h1>Goals</h1>
    <br />
    <Goals />
  </div>;
}

function Repositories({match}) {
  return (
    <div className="repositories">
      <Route exact path={match.url} render={content} />
      <Route path={"/repos/:repoOwner/:repoName/:id"} component={Repository} />
    </div>
  );
}

export default Repositories;
