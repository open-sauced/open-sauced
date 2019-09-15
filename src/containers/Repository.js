/* eslint-disable */
// replace with hooks and new React path
import React from "react";
import Form from "./NoteForm";
import Issues from "./Issues";
import api from "../lib/apiGraphQL";

export class Repository extends React.Component {
  state = {data: ""};

  componentDidMount() {
    const {
      params: {repoName, repoOwner},
    } = this.props.match;

    api.fetchRepositoryData(repoOwner, repoName).then(response => {
      const data = response.data.gitHub.repositoryOwner;
      this.setState({data});
    });
  }

  render() {
    const {repository} = this.state.data;
    const {id, url, stars, forksCount, issuesCount, name, description, notes, owner} = repository || {};

    return (
      <div>
        {repository ? (
          <div>
            <a style={{textDecoration: "none"}} href={url} target="_blank">
              <h1>{name}</h1>
            </a>
            <p>{description}</p>
            <p>{issuesCount} issues</p>
            <p>{forksCount} forks</p>
            <p>{stars} ★'s</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        {owner && <div style={{display: "flex", justifyContent: "space-between"}}>
          <Issues repoName={name} owner={owner.login} />
          <Form notes={notes} repoId={id} repoName={name} />
        </div>}
      </div>
    );
  }
}

export default Repository;
