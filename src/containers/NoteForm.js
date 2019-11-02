import React, {useState} from "react";
import {Redirect} from "react-router";
import Button from "../styles/Button";
import {FormColumn} from "../styles/Grid";
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
      <div className="grid-half form">
        <textarea
          style={{minHeight: 170}}
          disabled={!editing}
          className="utility-input boxed-input text-box light-shadow"
          onChange={_handleNotesChange}
          value={noteContent || ""}
          type="text"
          placeholder={`Type your notes for ${repoName} here...`}
          name="notes"
        />
        {editing ? (
          <Button onClick={_handleNoteUpdate}>
            <span className="icon-write" /> Save Notes
          </Button>
        ) : (
          <Button onClick={_handleToggleEditing}>
            <span className="icon-write" /> Edit Notes
          </Button>
        )}
        <Button primary onClick={_handleRepoDeletion}>
          {" "}
          Delete
        </Button>
      </div>
    </FormColumn>
  );
}

export default NoteForm;
