import React, {useState} from "react";
import {Redirect} from "react-router";
import Button from "../styles/Button";
import Card from "./Card";
import {FlexCenter} from "../styles/Grid";
import Modal from "./Modal";
import api from "../lib/apiGraphQL";

function DangerZone({goalId, repoName, note}) {
  const [removed, setRemoved] = useState(false);
  const [removeModalOpen, setRemoveModalOpen] = useState(false);

  const _handleRepoRemoval = () => {
    api
      .updateGoal(goalId, repoName, "CLOSED", note)
      .then(() => {
        setRemoved(true);
      })
      .catch(err => console.log(err));
  };

  return !removed ? (
    <Card>
      <Modal
        modalOpen={removeModalOpen}
        setModalOpen={setRemoveModalOpen}
      >
        <Card>
          <h1>Confirm Removal</h1>
          <p>Are you sure you want to remove this repository from your dashboard: <strong>{repoName}?</strong></p>
          <Button primary onClick={_handleRepoRemoval}>Confirm</Button>
          &nbsp;&nbsp;
          <Button onClick={() => setRemoveModalOpen(false)}>Cancel</Button>
        </Card>
      </Modal>
      <FlexCenter>
        <Button primary onClick={() => setRemoveModalOpen(true)}>
          Remove from Dashboard
        </Button>
      </FlexCenter>
    </Card>
  ) : (
    <Redirect to="/" />
  );
}

export default DangerZone;
