import React, {Component} from "react";
import {graphql, compose} from "react-apollo";
import {Redirect} from "react-router";
import Button from "../styles/Button";
import {FormColumn} from "../styles/Grid";
import {createRepo, deleteRepo} from "../queries";

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
      .createRepo({variables: {notes: notesInput, id: repoId}})
      .then(() => this.setState({notesInput: "", editing: false}));
  };

  handleRepoDeletion = id => {
    const {repoId} = this.props;

    this.props.deleteRepo({variables: {id: repoId}}).then(() => this.setState({deleted: true}));
  };

  handleToggleEditing = () => {
    this.setState({editing: !this.state.editing});
  };

  render() {
    const {notesInput, editing, deleted} = this.state;
    const {notes, repoName, id} = this.props;
    const noteContent = notesInput !== "" ? notesInput : notes;
    const deleteRepo = () => this.handleRepoDeletion(id);

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
          <Button destructive onClick={deleteRepo}>
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

const FormWithMutations = compose(graphql(createRepo, {name: "createRepo"}), graphql(deleteRepo, {name: "deleteRepo"}))(
  NoteForm,
);

export default FormWithMutations;
