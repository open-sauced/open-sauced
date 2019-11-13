import React, {useState, useEffect, useContext} from "react";
import CreateGoals from "./CreateGoals";
import ListGoals from "./ListGoals";
import LocaleContext from "../Context";
import AddRepoForm from "../components/AddRepoForm";
import Cards from "./Card";
import api from "../lib/apiGraphQL";

function Goals() {
  const [repository, setRepository] = useState({});
  const [loading, setLoading] = useState(true);
  const {goalsId, setGoalsId} = useContext(LocaleContext);

  const _handleRepoCreation = () => {
    api.createOpenSaucedGoalsRepo().then(res => setRepository(res));
  };

  const onGoalAdded = (goal) => {
    const newNode = {
      id: goal.id,
      title: goal.title
    };
    setRepository(repos => {
      const newRepos = {
        id:repos.id,
        issues:{
          nodes:  [newNode, ...repos.issues.nodes],
          totalCount: repos.issues.totalCount + 1
        }
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
    <Cards fitted>
      <AddRepoForm goalsId={goalsId} onGoalAdded={onGoalAdded} />
      <ListGoals goals={repository.issues} />
    </Cards>
  ) : (
    <CreateGoals handleGoalCreation={_handleRepoCreation} />
  );
}

export default Goals;
