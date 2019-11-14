import React, {useState, useEffect, useContext} from "react";
import CreateGoals from "./CreateGoals";
import {SpaceBetween} from "../styles/Grid";
import ListGoals from "./ListGoals";
import LocaleContext from "../Context";
import Illustration from "../styles/Illustration";
import AddRepoForm from "../components/AddRepoForm";
import Cards from "./Card";
import {done_checking} from "../illustrations";
import {ContextStyle} from "../styles/Card";
import api from "../lib/apiGraphQL";

function RepositoryGoals() {
  const [repository, setRepository] = useState({});
  const [loading, setLoading] = useState(true);
  const {goalsId, setGoalsId} = useContext(LocaleContext);

  const _handleRepoCreation = () => {
    api.createOpenSaucedGoalsRepo().then(res => setRepository(res));
  };

  const onGoalAdded = goal => {
    const newNode = {
      id: goal.id,
      title: goal.title,
    };
    setRepository(repos => {
      const newRepos = {
        id: repos.id,
        issues: {
          nodes: [newNode, ...repos.issues.nodes],
          totalCount: repos.issues.totalCount + 1,
        },
      };
      return newRepos;
    });
  };
  useEffect(() => {
    api.fetchGoalsQuery().then(({data}) => {
      const repo = data.gitHub.viewer.repository || {};
      setRepository(repo);
      setGoalsId(repo.id);
    });

    setLoading(false);
  }, [goalsId]);

  if (loading === true) {
    return <p>...Loading</p>;
  }

  return repository.issues ? (
    <React.Fragment>
      <ContextStyle>
        <SpaceBetween>
          <div className="context-div">
            <h1>Dashboard</h1>
            <p>
              Open Sauced is a project to track the contributions you would like to work on. Add a repository you are
              interested contributing to using the Repository's owner and name, also known as the "nameWithOwner"
              format.
            </p>
            <small><em><a href="https://opensource.guide/" target="_blank">Learn about about open source</a></em></small>
          </div>
          <Illustration src={done_checking} />
        </SpaceBetween>
      </ContextStyle>
      <Cards fitted>
        <AddRepoForm goalsId={goalsId} onGoalAdded={onGoalAdded} />
        <ListGoals goals={repository.issues} />
      </Cards>
    </React.Fragment>
  ) : (
    <CreateGoals handleGoalCreation={_handleRepoCreation} />
  );
}

export default RepositoryGoals;
