import React, {useEffect, useContext} from "react";
import CreateGoals from "./CreateGoals";
import {SpaceBetweenTop, Flex, FlexColumn} from "../styles/Grid";
import ListGoals from "./ListGoals";
import LocaleContext from "../Context";
import AddRepoForm from "../components/AddRepoForm";
import Card from "./Card";
import RecommendedRepoItem from "./RecommendedRepoItem";
import {RepositoryContext} from "../styles/Card";
import {goalsReducer, usePersistentStateReducer} from "../lib/reducers";
import {EmptyPlaceholder} from "../styles/EmptyPlaceholder";
import {ChecklistIcon} from "@primer/octicons-react";
import {fontSize} from "../styles/variables";
import {remainingStars} from "../lib/manageStarData";

function RepositoryGoals({user}) {
  const {goalsId, setGoalsId} = useContext(LocaleContext);
  const [state, dispatch] = usePersistentStateReducer("goalsState", goalsReducer);

  const {repository, error} = goalsReducer(state, {type: "GET"});

  useEffect(() => {
    repository && setGoalsId(repository.id);
  }, [goalsId, setGoalsId, repository]);

  const onRepoCreation = (id, repo) => {
    dispatch({type: "CREATE", payload: repo});
    setGoalsId(id);
  };

  const onGoalAdded = (goal) => {
    const newNode = {
      id: goal.id,
      title: goal.title,
    };

    const updatedRepos = (repos) => {
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

  const validateGoalToAdd = (goalName) => {
    return repository.issues.nodes.find(goal => goal.full_name === goalName) == null;
}

  const
    keys = ["full_name", "stargazers_count"],
    data = repository && repository.data && repository.data.text && JSON.parse(repository.data.text).filter(
      (s => o =>
        (k => !s.has(k) && s.add(k))(keys.map(k => o[k]).join("|"))
      )(new Set())
    );
  const viewerStars = repository && repository.stars && repository.stars.text && JSON.parse(repository.stars.text);

  const stars = remainingStars(data, viewerStars);

  return (
    <section>
      {repository && repository.issues.totalCount > 0 ? (
        <React.Fragment>
          <Flex>
            <RepositoryContext>
              <SpaceBetweenTop>
                <div>
                  {" "}
                  <h1>Dashboard</h1>
                  <p>
                    Open Sauced is a project to track the contributions you would like to work on. Add a repository you are interested contributing to using the
                    Repository's owner and name, also known as the "nameWithOwner" format.
                  </p>
                  <small>
                    <em>
                      <a href="https://opensource.guide/" rel="noreferrer" target="_blank">
                        Learn about open source
                      </a>
                    </em>
                  </small>
                </div>
              </SpaceBetweenTop>
            </RepositoryContext>

            <FlexColumn style={{flex: 1}}>
              {viewerStars && (
                <Card>
                  <h3 style={{fontSize: fontSize.default}}>Repo Recommendations</h3>
                  {viewerStars && stars.map((star) => <RecommendedRepoItem key={star.full_name} goal={star} onGoalAdded={onGoalAdded} validateGoalToAdd={validateGoalToAdd} goalsId={goalsId} />)}
                </Card>
              )}
            </FlexColumn>
          </Flex>

          <Card fitted>
            <AddRepoForm goalsId={goalsId} onGoalAdded={onGoalAdded} goals={repository.issues} />
            {repository.issues.totalCount > 0 ? (
              <ListGoals data={data} goals={repository.issues} />
            ) : (
              <EmptyPlaceholder>
                <div style={{color: "grey"}}>
                  <ChecklistIcon size="large" verticalAlign="middle" />
                </div>
                <div className="helper">No Goals created</div>
              </EmptyPlaceholder>
            )}
          </Card>
        </React.Fragment>
      ) : (
        <CreateGoals installNeeded={!!repository && !!error} databaseCreated={!!(repository && repository.issues)} goalsId={goalsId} onGoalAdded={onGoalAdded} user={(user && user) || ""} onRepoCreation={onRepoCreation} />
      )}
    </section>
  );
}

export default RepositoryGoals;
