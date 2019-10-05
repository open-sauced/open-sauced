import React, {useState, useRef} from "react";
import {Redirect} from "react-router";
import Button from "../styles/Button";
import {FormColumn} from "../styles/Grid";
import api from "../lib/apiGraphQL";

function NoteForm({goalId, repoName, note}) {
  const inputRef = useRef(note);
  const [editing, setEditing] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const _handleNoteUpdate = () => {
    api
      .updateGoal(goalId, repoName, "OPEN", inputRef.current.value)
      .then(response => _handleToggleEditing())
      .catch(err => console.log(err));
  };

  const _handleRepoDeletion = () => {
    api
      .updateGoal(goalId, repoName, "CLOSED", inputRef.current.value)
      .then(response => {
        inputRef.current.value = "";
        setEditing(false);
        setDeleted(true);
      })
      .catch(err => console.log(err));
  };

  const _handleToggleEditing = () => {
    setEditing(!editing);
  };

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
          ref={inputRef}
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
        <Button destructive onClick={_handleRepoDeletion}>
          Delete
        </Button>
      </div>
    </FormColumn>
  );
}

export default NoteForm;
