import React from "react";
import Button from "../styles/Button";

function CreateGoals({handleGoalCreation}) {
  return (
    <div>
      <p>To get saucin' create a goals</p>
      <Button onClick={handleGoalCreation}>Create your goal workspace</Button>
    </div>
  );
}

export default CreateGoals;
