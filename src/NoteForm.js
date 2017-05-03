import React, {Component} from "react";
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.sendDataToApollo = this.sendDataToApollo.bind(this);
    this.state = {
      data: {},
      description: '',
      owner: '',
    };
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }

  sendDataToApollo() {
    const {name, url, description, forks, owner, stargazers, issues, contributors} = this.state

    this.props.mutate({variables: {description}})
      .then(() => this.setState({description: ''}))
      .catch((error) => console.log(error));
  }

  render() {
    const { description, owner } = this.state
    const { repoId, repoName } = this.props

    return (
      <div className="Form">
        <div className="grid-full form">
          <textarea className="utility-input boxed-input text-box light-shadow" onChange={this.handleDescriptionChange} value={description} type="text" placeholder={`Type your notes for ${repoName} here...`} name="notes"></textarea>
          <button onClick={this.sendDataToApollo} className="button-ui-primary"><span className="icon-write"></span> Post Notes</button>
        </div>
      </div>
    );
  }
};

const createFormMutation = gql`
  mutation createRepository($owner: String!, $description: String) {
    createRepository(owner: $owner, description: $description) {
      id
    }
  }
`
const FormMutation = graphql(createFormMutation)(NoteForm)

export default FormMutation;

