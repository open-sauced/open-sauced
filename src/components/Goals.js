import React, {useState, useEffect, useContext} from "react";
import CreateGoals from "./CreateGoals";
import ListGoals from "./ListGoals";
import LocaleContext from "../Context";
import api from "../lib/apiGraphQL";

function Goals(props) {
  const [repository, setRepository] = useState({});
  const [loading, setLoading] = useState(true);
  const {goalsId, setGoalsId} = useContext(LocaleContext);

  const _handleRepoCreation = () => {
    api.createOpenSaucedGoalsRepo().then(res => setRepository(res));
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
    <ListGoals goalsId={goalsId} goals={repository.issues} />
  ) : (
    <CreateGoals handleGoalCreation={_handleRepoCreation} />
  );
}

export default Goals;
