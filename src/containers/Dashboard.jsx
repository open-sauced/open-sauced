import React, {Suspense} from "react";
import Repository from "../components/Repository";
import RepositoryGoals from "../components/RepositoryGoals";
import {Route} from "react-router-dom";
import {Spinner} from "../styles/Spinner";

function Repositories({user, match}) {
  return (
    <Suspense fallback={<Spinner />}>
      <Route exact path={match.url} render={(props) => <RepositoryGoals user={user} {...props} />} />
      <Route path={"/repos/:repoOwner/:repoName"} render={(props) => <Repository user={user} {...props} />} />
    </Suspense>
  );
}

export default Repositories;
