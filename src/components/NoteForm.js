import React, {useState} from "react";
import Button from "../styles/Button";
import {RenderedNote} from "../styles/TextArea";
import Card from "./Card";
import {FlexCenter} from "../styles/Grid";
import {PencilIcon} from "@primer/octicons-react";
import ReactMarkdown from "react-markdown";
import {SocialEditor} from "remirror/react/social";
import "remirror/styles/all.css";

import api from "../lib/apiGraphQL";

function NoteForm({goalId, repoName, note}) {
  const [previouslySavedValue, setPreviouslySavedValue] = useState(note);
  const [input, setInput] = useState(note);
  const [editing, setEditing] = useState(false);

  const _handleNoteUpdate = () => {
    api
      .updateGoal(goalId, repoName, "OPEN", input)
      .then(() => {
        _handleToggleEditing();
        setPreviouslySavedValue(input);
      })
      .catch(err => console.log(err));
  };

  const _handleToggleEditing = () => {
    setEditing(!editing);
  };

  const _handleCancelEditing = () => {
    setEditing(false);
    setInput(previouslySavedValue);
  };

  const _handleNotesChange = e => {
    if (!e.firstRender) {
      setInput(e.getText());
    }
  };

  const initialContent = {
    "type": "doc",
    "content": [
      {
        "type": "paragraph",
        "content": [
          {
            "type": "text",
            "text": input ||
            // Warning, this string must have at least one character in it, or remirror will throw an error
             " "
          }
        ]
      }
    ]
  }

  return (
    <Card>
      {!editing ? (
        <RenderedNote data-testid="notes-content" >
          <ReactMarkdown className="noteContent" source={input || ""} />
        </RenderedNote>
      ) : (
        <SocialEditor
          disabled={!editing}
          onChange={_handleNotesChange}
          initialContent={initialContent}
          placeholder={`Type your notes for ${repoName} here...`}
          autoFocus={false}
          name="notes"
          aria-label="note input"
        />
      )}
      <FlexCenter>
        {editing ? (
          <Button onClick={_handleNoteUpdate}>
            <PencilIcon verticalAlign="middle" />
            Save Notes
          </Button>
        ) : (
          <Button onClick={_handleToggleEditing}>
            <PencilIcon verticalAlign="middle" />
            Edit Notes
          </Button>
        )}
        {editing ? (
          <Button primary onClick={_handleCancelEditing}>
            Cancel
          </Button>
        ) : ""}
      </FlexCenter>
    </Card>
  );
}

export default NoteForm;
