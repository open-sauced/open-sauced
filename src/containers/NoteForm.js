/* eslint-disable */
// replace with hooks and new React path

import React, {Component} from "react";
import {Redirect} from "react-router";
import Button from "../styles/Button";
import {FormColumn} from "../styles/Grid";
import api from "../lib/apiGraphQL";

export class NoteForm extends Component {
  state = {
    data: {},
    notesInput: "",
    owner: "",
    editing: false,
    deleted: false,
  };

  handleNotesChange = e => {
    this.setState({notesInput: e.target.value});
  };

  handleNoteCreation = () => {
    const {notesInput} = this.state;
    const {repoId} = this.props;

    api
      .updateGoal({variables: {notes: notesInput, id: repoId}})
      .then(() => this.setState({notesInput: "", editing: false}));
  };

  handleRepoDeletion = () => {
    const {repoId} = this.props;

  console.log("update api to close goal issues or remove comments")
    // api.deleteGoal({variables: {id: repoId}}).then(() => this.setState({deleted: true}));
  };

  handleToggleEditing = () => {
    this.setState({editing: !this.state.editing});
  };

  render() {
    const {notesInput, editing, deleted} = this.state;
    const {notes, repoName} = this.props;
    const noteContent = notesInput !== "" ? notesInput : notes;

    return !deleted ? (
      <FormColumn>
        <div className="grid-half form">
          <textarea
            style={{minHeight: 170}}
            disabled={!editing}
            className="utility-input boxed-input text-box light-shadow"
            onChange={this.handleNotesChange}
            value={noteContent || ""}
            type="text"
            placeholder={`Type your notes for ${repoName} here...`}
            name="notes"
          />
          {editing ? (
            <Button onClick={this.handleNoteCreation}>
              <span className="icon-write" /> Save Notes
            </Button>
          ) : (
            <Button onClick={this.handleToggleEditing}>
              <span className="icon-write" /> Edit Notes
            </Button>
          )}
          <Button destructive onClick={this.handleRepoDeletion}>
            {" "}
            Delete
          </Button>
        </div>
      </FormColumn>
    ) : (
      <Redirect to="/" />
    );
  }
}

export default NoteForm;
