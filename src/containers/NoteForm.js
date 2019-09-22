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

  _handleNotesChange = e => {
    this.setState({notesInput: e.target.value});
  };

  _handleNoteCreation = () => {
    const {notesInput} = this.state;
    const {repoId, repoName} = this.props;

    // TODO: updateGoal insteadsrc/lib/apiGraphQL.js
    api
      .updateGoal(repoId, repoName, "OPEN", notesInput)
      .then((response) => console.log(response))
      .catch(err => console.log(err));
  };

  _handleRepoDeletion = () => {
    const {repoId, repoName} = this.props;
    const {notesInput} = this.state;

    api
      .updateGoal(repoId, repoName, "CLOSED", notesInput)
      .then((response) => this.setState({notesInput: "", editing: false}).catch(err => console.log(err)))
      .catch(err => console.log(err));
  };

  handleToggleEditing = () => {
    this.setState({editing: !this.state.editing});
  };

  // TODO: create a button to display until goal is created for repo
  // notes should not be created without api.createGoal initialized
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
            onChange={this._handleNotesChange}
            value={noteContent || ""}
            type="text"
            placeholder={`Type your notes for ${repoName} here...`}
            name="notes"
          />
          {editing ? (
            <Button onClick={this._handleNoteCreation}>
              <span className="icon-write" /> Save Notes
            </Button>
          ) : (
            <Button onClick={this.handleToggleEditing}>
              <span className="icon-write" /> Edit Notes
            </Button>
          )}
          <Button destructive onClick={this._handleRepoDeletion}>
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
