import React from "react";
import Button from "../styles/Button";
import api from "../lib/apiGraphQL";
import {goalsReducer} from "../lib/reducers";

function CreateGoals({onRepoCreation}) {
  const _handleRepoCreation = () => {
    api.createOpenSaucedGoalsRepo().then(res => {
      onRepoCreation(goalsReducer(res, {type: "CREATE"}));
    });
  };

  return (
    <div>
      <p>To get saucin' create a goals</p>
      <Button onClick={_handleRepoCreation}>Create your goal workspace</Button>
    </div>
  );
}

export default CreateGoals;
