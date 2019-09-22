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
    const {id, url, stargazers, forks, issues, name, nameWithOwner, description, body, owner} = repository || {};

    return (
      <div>
        {repository ? (
          <div>
            <a style={{textDecoration: "none"}} href={url} target="_blank">
              <h1>{name}</h1>
            </a>
            <p>{description}</p>
            <p>{issues.totalCount} issues</p>
            <p>{forks.totalCount} forks</p>
            <p>{stargazers.totalCount} ★</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        {owner && <div style={{display: "flex", justifyContent: "space-between"}}>
          <Issues repoName={name} owner={owner.login} />
          <Form notes={body} repoId={this.props.match.params.id} repoName={nameWithOwner} />
        </div>}
      </div>
    );
  }
}

export default Repository;
