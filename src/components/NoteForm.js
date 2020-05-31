import React, {useState} from "react";
import {Redirect} from "react-router";
import Button from "../styles/Button";
import {NoteArea, RenderedNote} from "../styles/Note";
import Card from "./Card";
import {FlexCenter} from "../styles/Grid";
import Octicon, {getIconByName} from "@primer/octicons-react";
import ReactMarkdown from "react-markdown";

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

  return !deleted ? (
    <Card>
      {!editing ? (
        <RenderedNote>
          <ReactMarkdown className="noteContent" source={noteContent || ""} />
        </RenderedNote>
      ) : (
        <NoteArea
          disabled={!editing}
          onChange={_handleNotesChange}
          value={noteContent || ""}
          type="text"
          placeholder={`Type your notes for ${repoName} here...`}
          name="notes"
          aria-label="note input"
        />
      )}
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
        {editing ? (
          <Button primary onClick={_handleToggleEditing}>
            Cancel
          </Button>
        ) : (
          <Button primary onClick={_handleRepoDeletion}>
            Delete
          </Button>
        )}
      </FlexCenter>
    </Card>
  ) : (
    <Redirect to="/" />
  );
}

export default NoteForm;
