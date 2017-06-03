import React, {Component} from "react";
import {graphql, compose} from "react-apollo";
import {Redirect} from "react-router";
import gql from "graphql-tag";
import Button from "./styles/Button";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.handleNoteCreation = this.handleNoteCreation.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.state = {
      data: {},
      notesInput: "",
      owner: "",
      editing: false,
      deleted: false
    };
  }

  handleNotesChange(e) {
    this.setState({notesInput: e.target.value});
  }

  handleNoteCreation() {
    const {notesInput} = this.state;
    const {repoId} = this.props;

    this.props.createRepo({variables: {notes: notesInput, id: repoId}})
      .then(() => this.setState({notesInput: "", editing: false}));
  }

  handleRepoDeletion(id) {
    const {repoId} = this.props;

    this.props.deleteRepo({variables: {id: repoId}})
      .then(() => this.setState({deleted: true}));
  }

  toggleEditing() {
    this.setState({editing: !this.state.editing});
  }

  render() {
    const {notesInput, editing, deleted} = this.state;
    const {notes, repoName, id} = this.props;
    const noteContent = notesInput !== "" ? notesInput : notes;

    return !deleted ?
      <div style={{flex: 2}} className="Form">
        <div className="grid-half form">
          <textarea style={{minHeight: 170}} disabled={!editing} className="utility-input boxed-input text-box light-shadow" onChange={this.handleNotesChange} value={noteContent || ""} type="text" placeholder={`Type your notes for ${repoName} here...`} name="notes" />
          {editing ?
            <Button onClick={this.handleNoteCreation}><span className="icon-write" /> Save Notes</Button>
            : <Button onClick={this.toggleEditing} ><span className="icon-write" /> Edit Notes</Button>
          }
          <Button destructive onClick={() => this.handleRepoDeletion(id)}> Delete</Button>
        </div>
      </div>
    : <Redirect to="/"/>;
  }
}

const createRepo = gql`
  mutation updateRepository($notes: String, $id: ID!) {
    updateRepository(id: $id, notes: $notes) {
      id
      notes
    }
  }
`;

const deleteRepo = gql`
  mutation deleteRepo($id: ID!) {
    deleteRepository(id: $id) {
      id
    }
  }
`;


const FormWithMutations = compose(
  graphql(createRepo, {name: "createRepo"}),
  graphql(deleteRepo, {name: "deleteRepo"})
)(NoteForm);

export default FormWithMutations;

