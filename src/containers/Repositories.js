/* eslint-disable */
// replace with hooks and new React path

import React, {Component} from "react";
import Repository from "./Repository";
import Instructions from "../components/Instructions";
import {graphql, compose} from "react-apollo";
import {Route, Link} from "react-router-dom";
import {allRepoQuery, createViewer} from "../queries";
import cookie from "react-cookies";

export class Repositories extends Component {
  state = {viewerId: cookie.load("openSaucedViewerId")};

  componentDidMount() {
    // TODO Remove this and replace with a Subscription
    // https://github.com/bdougie/open-sauced/issues/59
    if (this.props.data.loading) {
      this.props.data.refetch();
    }

    if (this.state.viewerId === undefined) {
      this.createUser();
    }
  }

  componentWillReceiveProps(nextProps) {
    // TODO Remove this and replace with a Subscription
    // https://github.com/bdougie/open-sauced/issues/59
    if (nextProps.data.loading !== this.props.data.loading) {
      this.props.data.refetch();
    }

    if (this.state.viewerId === undefined) {
      this.createUser();
    }
  }

  createUser = () => {
    const user = this.props.user;
    if (!user) {
      console.warn("No user available to create");
      return;
    }

    this.props
      .createViewer({variables: {email: user.email, identityId: user.id}})
      .then(() => this.props.data.refetch());
  };

  render() {
    const {match, data} = this.props;
    const {allRepositories} = data;
    const content = () => (
      <div className="landing-nav">
        <h1>Open Sauced GitHub Reposoitories</h1>
        <br />
        <Instructions allRepositories={allRepositories} />
        <ul>
          {allRepositories ? (
            allRepositories.map(repo => (
              <li key={repo.name}>
                <Link to={`/repos/${repo.name}/${repo.id}`}>{repo.name}</Link>
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
        <Route path={"/repos/:repoName/:id"} component={Repository} />
      </div>
    );
  }
}

const queryOptions = {
  options: {
    variables: {
      id: cookie.load("openSaucedViewerId"),
    },
  },
};

const RepositoriesWithData = compose(
  graphql(allRepoQuery, queryOptions),
  graphql(createViewer, {name: "createViewer"}),
)(Repositories);

export default RepositoriesWithData;
