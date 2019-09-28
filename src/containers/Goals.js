/*eslint-disable */
import React, {useState, useEffect} from "react";
import CreateGoals from "../components/CreateGoals";
import ListGoals from "../components/ListGoals";
import api from "../lib/apiGraphQL";

function Goals() {
  const [repository, setRepository] = useState({});
  const [loading, setLoading] = useState(true);

  const _handleRepoCreation = () => {
    api.createOpenSaucedGoalsRepo().then(res => setRepository(res));
  };

  useEffect(() => {
    api.fetchGoalsQuery().then(response => {
      const repo = response.data.gitHub.viewer.repository;
      setRepository(repo);
      localStorage.setItem("goalsId", repo.id);
    });

    setLoading(false);
  }, []);

  if (loading === true) {
    return <p>...Loading</p>;
  }

  return repository.issues ? (
    <ListGoals goals={repository.issues} />
  ) : (
    <CreateGoals handleGoalCreation={_handleRepoCreation} />
  );
}

export default Goals;
