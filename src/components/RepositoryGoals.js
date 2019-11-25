import React, {useContext} from "react";
import CreateGoals from "./CreateGoals";
import {SpaceBetween} from "../styles/Grid";
import ListGoals from "./ListGoals";
import LocaleContext from "../Context";
import Illustration from "../styles/Illustration";
import AddRepoForm from "../components/AddRepoForm";
import Cards from "./Card";
import {done_checking} from "../illustrations";
import {ContextStyle} from "../styles/Card";
import {usePersistedState} from "../lib/hooks";

function RepositoryGoals() {
  const {goalsId, setGoalsId} = useContext(LocaleContext);
  const [state, setState] = usePersistedState("goalsState");

  // TODO: leverage a reducer here
  const {repository} = state.data !== undefined && state.data.data.gitHub.viewer;

  // TODO: Set up better way to set initial state
  state.repository !== undefined && setGoalsId(state.repository.id);

  const onRepoCreation = repo => {
    setState(repo);
  };

  const onGoalAdded = goal => {
    const newNode = {
      id: goal.id,
      title: goal.title,
    };
    setState(repos => {
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

  return repository && repository.issues ? (
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
            <small>
              <em>
                <a href="https://opensource.guide/" target="_blank">
                  Learn about about open source
                </a>
              </em>
            </small>
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
    <CreateGoals onRepoCreation={onRepoCreation} />
  );
}

export default RepositoryGoals;
