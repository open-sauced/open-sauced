/* eslint-disable */
// replace with hooks and new React path

import React, {Component} from "react";
import api from "../lib/apiGraphQL";
import {Redirect} from "react-router";
import Button from "../styles/Button";
import {Link} from "react-router-dom";

export class NewRepoForm extends Component {
  state = {
    data: {},
    url: "",
    contributors: "",
    name: "",
    url: "",
    description: "",
    forks: "",
    owner: "",
    stargazers: "",
    issues: "",
    submitted: false,
  };

  _handleSetUrl = (e) => {
    this.setState({url: e.target.value});
  }

  _handleNoteCreation = (name, notesInput) => {
    const goalsId = localStorage.getItem("goalsId");
    const title = name;

    api.createGoal(goalsId, title, notesInput).then(() => this.setState({notesInput: "", editing: false}));
  };

  _handleFetchRepoData = () => {
    const [_1, _2, _3, owner, repo] = this.state.url.split("/");
    if (!owner || !repo) {
      console.warn("Invalid GitHub repository url!");
    };

    api.fetchRepositoryData(owner, repo).then(response => {
      const data = response.data.gitHub.repositoryOwner.repository;
      const {id, nameWithOwner, url, description, forks, owner, stargazers, issues} = data;
      this.setState({
        id: id,
        data: data,
        name: nameWithOwner,
        url: url,
        description: description,
        forks: forks.totalCount,
        owner: owner.login,
        stargazers: stargazers.totalCount,
        issues: issues.totalCount,
      });

      this._handleNoteCreation(nameWithOwner, null)
    });
  }

  render() {
    const {id, url, submitted, name} = this.state;
    console.log(id)

    return !submitted ? (
      <div className="Form">
        <h1 className="title">Enter a GitHub URL</h1>
        <p>Add a url or full name for a GitHub repository</p>
        <div className="">
          <div name="">
            <input
              className="utility-input urlForm"
              type="url"
              onChange={this._handleSetUrl}
              value={url}
              placeholder="https://github.com/babel/actions"
            />
            {name && <Link to={`/repos/${name}/${id}`}><Button disabled={!url}>explore {name} issues</Button></Link>}
            {!name && <Button disabled={!url} onClick={this._handleFetchRepoData}>Fetch repository data</Button>}
          </div>
          <div className="shadow" />
        </div>
      </div>
    ) : (
      <Redirect to="/" />
    );
  }
}

export default NewRepoForm;
