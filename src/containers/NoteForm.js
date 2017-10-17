import React, {Component} from "react";
import {graphql, compose} from "react-apollo";
import {Redirect} from "react-router";
import Button from "../styles/Button";
import {FormColumn} from "../styles/Grid";
import {updateRepo, deleteRepo} from "../queries";

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

    this.props
      .updateRepo({variables: {notes: notesInput, id: repoId}})
      .then(() => this.setState({notesInput: "", editing: false}));
  };

  handleRepoDeletion = () => {
    const {repoId} = this.props;

    this.props.mutate.deleteRepo({variables: {id: repoId}}).then(() => this.setState({deleted: true}));
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

const FormWithMutations = compose(graphql(updateRepo, {name: "updateRepo"}), graphql(deleteRepo, {name: "deleteRepo"}))(
  NoteForm,
);

export default FormWithMutations;
