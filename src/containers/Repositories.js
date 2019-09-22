/* eslint-disable */
// replace with hooks and new React path

import React, {Component} from "react";
import Repository from "./Repository";
import Instructions from "../components/Instructions";
import Goals from "../containers/Goals";
import {Route, Link} from "react-router-dom";
import api from "../lib/apiGraphQL";

export class Repositories extends Component {
  state = {data: ""}

  render() {
    const {match} = this.props;
    const {data} = this.state;
    const {repositoriesContributedTo} = data;
    const content = () => (
      <div className="landing-nav">
        <h1>Goals</h1>
        <br />
        <Goals />
      </div>
    );

    return (
      <div className="repositories">
        <Route exact path={match.url} render={content} />
        <Route path={"/repos/:repoOwner/:repoName/:id"} component={Repository} />
      </div>
    );
  }
}

export default Repositories;
