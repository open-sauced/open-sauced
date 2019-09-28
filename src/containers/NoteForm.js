import React, {useState} from "react";
import {Redirect} from "react-router";
import Button from "../styles/Button";
import {FormColumn} from "../styles/Grid";
import api from "../lib/apiGraphQL";

function NoteForm({repoId, repoName, notes}) {
  const [input, setInput] = useState("");
  const [editing, setEditing] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const _handleNotesChange = e => {
    setInput(e.target.value);
  };

  const _handleNoteCreation = () => {
    api
      .updateGoal(repoId, repoName, "OPEN", input)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };

  const _handleRepoDeletion = () => {
    api
      .updateGoal(repoId, repoName, "CLOSED", input)
      .then(response => {
        setInput("");
        setEditing(false);
        setDeleted(true);
      })
      .catch(err => console.log(err));
  };

  const _handleToggleEditing = () => {
    setEditing(!editing);
  };

  const noteContent = input !== "" ? input : notes;

  return !deleted ? (
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
          <Button onClick={_handleNoteCreation}>
            <span className="icon-write" /> Save Notes
          </Button>
        ) : (
          <Button onClick={_handleToggleEditing}>
            <span className="icon-write" /> Edit Notes
          </Button>
        )}
        <Button destructive onClick={_handleRepoDeletion}>
          {" "}
          Delete
        </Button>
      </div>
    </FormColumn>
  ) : (
    <Redirect to="/" />
  );
}

export default NoteForm;
