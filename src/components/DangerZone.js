import React, {useState} from "react";
import {Redirect} from "react-router";
import Button from "../styles/Button";
import Card from "./Card";
import {FlexCenter} from "../styles/Grid";
import Modal from "./Modal";
import api from "../lib/apiGraphQL";

function DangerZone({goalId, repoName, note}) {
  const [deleted, setDeleted] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

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
      <Modal
        modalOpen={deleteModalOpen}
        setModalOpen={setDeleteModalOpen}
      >
        <Card>
          <h1>Confirm Deletion on Repository: {repoName}?</h1>
          <Button primary onClick={_handleRepoDeletion}>Confirm</Button>
          &nbsp;&nbsp;
          <Button onClick={() => setDeleteModalOpen(false)}>Cancel</Button>
        </Card>
      </Modal>
      <FlexCenter>
        <Button primary onClick={() => setDeleteModalOpen(true)}>
          Delete this repository
        </Button>
      </FlexCenter>
    </Card>
  ) : (
    <Redirect to="/" />
  );
}

export default DangerZone;
