import React, {Component} from "react";
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.sendDataToApollo = this.sendDataToApollo.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.state = {
      data: {},
      notesInput: '',
      owner: '',
      editing: false
    };
  }

  handleNotesChange(e) {
    this.setState({notesInput: e.target.value});
  }

  sendDataToApollo() {
    const {notesInput} = this.state
    const {repoId} = this.props

    this.props.mutate({variables: {notes: notesInput, id: repoId}})
      .then(() => this.setState({notesInput: '', editing: false}))
      .catch((error) => console.log(error));
  }

  toggleEditing() {
    this.setState({editing: !this.state.editing})
  }

  render() {
    const { notesInput, editing } = this.state
    const { notes, repoName } = this.props

    return (
      <div className="Form">
        <div className="grid-full form">
          <textarea disabled={!editing} className="utility-input boxed-input text-box light-shadow" onChange={this.handleNotesChange} value={notes || notesInput} type="text" placeholder={`Type your notes for ${repoName} here...`} name="notes"></textarea>
          {editing ?
            <button onClick={this.sendDataToApollo} className="button-ui-primary"><span className="icon-write"></span> Save Notes</button>
            : <button onClick={this.toggleEditing} className="button-ui-primary"><span className="icon-write"></span> Edit Notes</button>
          }
        </div>
      </div>
    );
  }
};

const createFormMutation = gql`
  mutation updateRepository($notes: String, $id: ID!) {
    updateRepository(id: $id, notes: $notes) {
      id
      notes
    }
  }
`
const FormMutation = graphql(createFormMutation)(NoteForm)

export default FormMutation;

