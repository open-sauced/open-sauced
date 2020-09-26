import React, {useState} from "react";
import {Redirect} from "react-router";
import Button from "../styles/Button";
import Card from "./Card";
import {FlexCenter} from "../styles/Grid";

import api from "../lib/apiGraphQL";

function DangerZone({goalId, repoName, note}) {
  const [deleted, setDeleted] = useState(false);

  const _handleRepoDeletion = () => {
    api
      .updateGoal(goalId, repoName, "CLOSED", note)
      .then(() => {
        setDeleted(true);
      })
      .catch(err => console.log(err));
  };

  return !deleted ? (
    <Card>
      <FlexCenter>
        <Button primary onClick={_handleRepoDeletion}>
          Delete this repository
        </Button>
      </FlexCenter>
    </Card>
  ) : (
    <Redirect to="/" />
  );
}

export default DangerZone;
