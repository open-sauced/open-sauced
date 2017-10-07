import React from "react";
import Repository from "./Repository";
import Instructions from "./Instructions";
import {graphql} from "react-apollo";
import {Route, Link} from "react-router-dom";
import {allRepoQuery} from "../queries";

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

const RepositoriesWithData = graphql(allRepoQuery)(Repositories);

export default RepositoriesWithData;
