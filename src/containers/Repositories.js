/* eslint-disable */
// replace with hooks and new React path

import React, {Component} from "react";
import Repository from "./Repository";
import Instructions from "../components/Instructions";
import Goals from "../containers/Goals";
import {graphql, compose} from "react-apollo";
import {Route, Link} from "react-router-dom";
import {allRepoQuery, createViewer} from "../queries";
import cookie from "react-cookies";
import api from "../lib/apiGraphQL";

export class Repositories extends Component {
  state = {data: ""}

  componentDidMount() {
   api.fetchContributedRepoQuery().then(response => {
      const data = response.data.gitHub.viewer
      this.setState({data});
    });
  }

  render() {
    const {match} = this.props;
    const {data} = this.state;
    const {repositoriesContributedTo} = data;
    const content = () => (
      <div className="landing-nav">
        <Goals />
        <h1>Repositories you have contributed to</h1>
        <br />
          {repositoriesContributedTo && <Instructions allRepositories={repositoriesContributedTo.nodes} />}
        <ul>
          {repositoriesContributedTo ? (
            repositoriesContributedTo.nodes.map(repo => (
              <li key={repo.nameWithOwner}>
                {/* Swap repo.id with open-sauced-goals id */}
                <Link to={`/repos/${repo.nameWithOwner}/${repo.id}`}>{repo.nameWithOwner}</Link>
              </li>
            ))
          ) : (
            <p className="greyed">Loading...</p>
          )}
        </ul>
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
