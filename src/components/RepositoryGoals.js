import React, {useEffect, useContext} from "react";
import CreateGoals from "./CreateGoals";
import {SpaceBetween} from "../styles/Grid";
import ListGoals from "./ListGoals";
import LocaleContext from "../Context";
import Illustration from "../styles/Illustration";
import AddRepoForm from "../components/AddRepoForm";
import Cards from "./Card";
import {doneChecking} from "../illustrations";
import {ContextStyle} from "../styles/Card";
import {goalsReducer, usePersistentStateReducer} from "../lib/reducers";

function RepositoryGoals() {
  const {goalsId, setGoalsId} = useContext(LocaleContext);
  const [state, dispatch] = usePersistentStateReducer("goalsState", goalsReducer);

  const {repository} = goalsReducer(state, {type: "GET"});

  useEffect(() => {
    if (repository !== undefined) {
      setGoalsId(repository.id);
    }
  }, [goalsId]);

  const onRepoCreation = repo => {
    dispatch({type: "CREATE", payload: repo});
  };

  const onGoalAdded = goal => {
    const newNode = {
      id: goal.id,
      title: goal.title,
    };

    const updatedRepos = repos => {
      const newRepos = {
        id: repos.id,
        issues: {
          nodes: [newNode, ...repos.issues.nodes],
          totalCount: repos.issues.totalCount + 1,
        },
      };
      return newRepos;
    };

    dispatch({type: "UPDATE", payload: updatedRepos});
  };

  return repository && repository.issues ? (
    <React.Fragment>
      {/* remove maxMidth when more cards are added*/}
      <ContextStyle style={{maxWidth: 880}}>
        <SpaceBetween>
          <React.Fragment>
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
          </React.Fragment>
          <Illustration alt="done checking image" src={doneChecking} />
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
