import React, {useState} from "react";
import {Redirect} from "react-router";
import Button from "../styles/Button";
import Card from "../components/Card";
import TextArea from "../styles/TextArea";
import {FormColumn, FlexCenter} from "../styles/Grid";
import Octicon, {getIconByName} from "@primer/octicons-react";

import api from "../lib/apiGraphQL";

function NoteForm({goalId, repoName, note}) {
  const [input, setInput] = useState(note);
  const [editing, setEditing] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const _handleNoteUpdate = () => {
    api
      .updateGoal(goalId, repoName, "OPEN", input)
      .then(res => _handleToggleEditing())
      .catch(err => console.log(err));
  };

  const _handleRepoDeletion = () => {
    api
      .updateGoal(goalId, repoName, "CLOSED", input)
      .then(res => {
        console.log(res);
        setEditing(false);
        setDeleted(true);
      })
      .catch(err => console.log(err));
  };

  const _handleToggleEditing = () => {
    setEditing(!editing);
  };

  const _handleNotesChange = e => {
    setInput(e.target.value);
  };

  const noteContent = input !== "" ? input : note;

  if (deleted) {
    <Redirect to="/" />;
  }

  return (
    <FormColumn>
      <Card>
        <TextArea
          style={{minHeight: 170}}
          disabled={!editing}
          className="utility-input boxed-input text-box light-shadow"
          onChange={_handleNotesChange}
          value={noteContent || ""}
          type="text"
          placeholder={`Type your notes for ${repoName} here...`}
          name="notes"
          aria-label="note input"
        />
        <FlexCenter>
          {editing ? (
            <Button onClick={_handleNoteUpdate}>
              <Octicon verticalAlign="middle" icon={getIconByName("pencil")} />
              Save Notes
            </Button>
          ) : (
            <Button onClick={_handleToggleEditing}>
              <Octicon verticalAlign="middle" icon={getIconByName("pencil")} />
              Edit Notes
            </Button>
          )}
          <Button primary onClick={_handleRepoDeletion}>
            {" "}
            Delete
          </Button>
        </FlexCenter>
      </Card>
    </FormColumn>
  );
}

export default NoteForm;
