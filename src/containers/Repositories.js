import React from "react";
import Repository from "./Repository";
import Instructions from "../components/Instructions";
import {graphql, compose} from "react-apollo";
import {Route, Link} from "react-router-dom";
import {allRepoQuery, viewerQuery} from "../queries";

export const Repositories = ({match, data}) => {
  data.refetch();
  const {allRepositories} = data;
  const content = () => (
    <div className="landing-nav">
      <h1>Open Sauced GitHub Reposoitories</h1>
      <br />
      <Instructions allRepositories={allRepositories} />
      <ul>
        {allRepositories ? (
          allRepositories.map((repo) => (
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
};

const currentUser = localStorage.getItem("currentOpenSaucedUser");
const queryOptions = {
  options: {
    variables: {
      id: currentUser ? JSON.parse(currentUser)["id"] : ""
    }
  }
};

const RepositoriesWithData = compose(
  graphql(viewerQuery, queryOptions),
  graphql(allRepoQuery, queryOptions),
)(Repositories);

export default RepositoriesWithData;
