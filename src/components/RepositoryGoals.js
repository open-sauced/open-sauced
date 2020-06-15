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
import {EmptyPlaceholder} from "../styles/EmptyPlaceholder";
import Octicon, {getIconByName} from "@primer/octicons-react";

function RepositoryGoals({user}) {
  const {goalsId, setGoalsId} = useContext(LocaleContext);
  const [state, dispatch] = usePersistentStateReducer("goalsState", goalsReducer);

  const {repository} = goalsReducer(state, {type: "GET"});

  useEffect(() => {
    repository && setGoalsId(repository.id);
  }, [goalsId]);

  const onRepoCreation = (id, repo) => {
    dispatch({type: "CREATE", payload: repo});
    setGoalsId(id);
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

  const data = repository.data && JSON.parse(repository.data.text)

  return (
    <section>
      {repository && repository.issues ? (
        <React.Fragment>
          <ContextStyle>
            <SpaceBetween>
              <div>
                {" "}
                <h1>Dashboard</h1>
                <p>
                  Open Sauced is a project to track the contributions you would like to work on. Add a repository you
                  are interested contributing to using the Repository's owner and name, also known as the
                  "nameWithOwner" format.
                </p>
                <small>
                  <em>
                    <a href="https://opensource.guide/" rel="noreferrer" target="_blank">
                      Learn about about open source
                    </a>
                  </em>
                </small>
              </div>
              <Illustration alt="done checking image" src={doneChecking} />
            </SpaceBetween>
          </ContextStyle>
          <Cards fitted>
            <AddRepoForm goalsId={goalsId} onGoalAdded={onGoalAdded} />
            {repository.issues.totalCount > 0 ? (
              <ListGoals data={data} goals={repository.issues} />
            ) : (
              <EmptyPlaceholder>
                <div style={{color: "grey"}}>
                  <Octicon size="large" verticalAlign="middle" icon={getIconByName("checklist")} />
                </div>
                <div className="helper">
                  No Goals created
                </div>
              </EmptyPlaceholder>
            )}
          </Cards>
        </React.Fragment>
      ) : (
        <CreateGoals user={user.login} onRepoCreation={onRepoCreation} />
      )}
    </section>
  );
}

export default RepositoryGoals;
