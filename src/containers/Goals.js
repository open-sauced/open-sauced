import React, {useState, useEffect} from "react";
import CreateGoals from "../components/CreateGoals";
import ListGoals from "../components/ListGoals";
import LocaleContext from "../Context";
import api from "../lib/apiGraphQL";

function Goals(props) {
  const [repository, setRepository] = useState({});
  const [loading, setLoading] = useState(true);
  const {goalsId, setGoalsId} = React.useContext(LocaleContext);

  const _handleRepoCreation = () => {
    api.createOpenSaucedGoalsRepo().then(res => setRepository(res));
  };

  useEffect(() => {
    api.fetchGoalsQuery().then(response => {
      const repo = response.data.gitHub.viewer.repository;
      setRepository(repo);
      setGoalsId(repo.id);
    });

    setLoading(false);
  }, [goalsId]);

  if (loading === true) {
    return <p>...Loading</p>;
  }

  return repository.issues ? (
    <ListGoals goalsId={goalsId} goals={repository.issues} />
  ) : (
    <CreateGoals handleGoalCreation={_handleRepoCreation} />
  );
}

export default Goals;
