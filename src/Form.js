import React, {Component} from "react";
import api from "./lib/apiGraphQL"
import firebase from "./lib/firebase"
import './button.css';

class Form extends Component {
  constructor(props) {
    super(props)
    this.setUrl = this.setUrl.bind(this);
    this.fetchRepoData = this.fetchRepoData.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleForksChange = this.handleForksChange.bind(this);
    this.handleIssuessChange = this.handleIssuessChange.bind(this);
    this.handleStarsChange = this.handleStarsChange.bind(this);
    this.handleOwnerChange = this.handleOwnerChange.bind(this);
    this.handleContributorsChange = this.handleContributorsChange.bind(this);
    this.sendDataToFireBase = this.sendDataToFireBase.bind(this);
    this.state = {
      uri: null,
      repo: null,
      name: null,
      contributors: '',
      data: {}
    };
  }

  handleNameChange(e) {
    this.state.data.name = e.target.value;
  }

  handleUrlChange(e) {
    this.state.data.url = e.target.value;
  }

  handleDescriptionChange(e) {
    this.state.data.description = e.target.value;
  }

  handleForksChange(e) {
    this.state.data.forks = e.target.value;
  }

  handleIssuessChange(e) {
    this.state.data.issues = e.target.value;
  }

  handleStarsChange(e) {
    this.state.data.stargazers = e.target.value;
  }

  handleOwnerChange(e) {
    this.state.data.owner = e.target.value;
  }

  handleContributorsChange(e) {
    this.setState({contributors: e.target.value});
  }

  sendDataToFireBase() {
    const {name, url, description, forks, owner, stargazers, issues} = this.state.data

    firebase.writeUserData({
      name,
      url,
      owner: owner.login,
      ownersRepoCount: owner.repositories.totalCount,
      contributors: this.state.contributors,
      forks: forks.totalCount,
      stars: stargazers.totalCount,
      issues: issues.totalCount,
      description,
    })

    this.state.data = {};
  }

  setUrl(e) {
    this.setState({url: e.target.value})
  }

  fetchRepoData() {
    const url = this.state.url.split("/")
    api.fetchRepositoryData(url[3], url[4]).then(
      (response) => this.setState({data: response.data.data.repositoryOwner.repository})
    );
  }

  render() {
    const {name, url, description, forks, owner, stargazers, issues} = this.state.data
    return (
      <div className="Form grid">
        <h2 className="title">Enter a GitHub URL</h2>
        <div className="">
          <div name="">
            <input className="urlForm" type="url" onChange={this.setUrl} value={this.state.url} placeholder="https://github.com/netlify/netlify-cms"/>
            <p>
              <button className="button-ui-default" onClick={this.fetchRepoData}>Scrape</button>
            </p>
          </div>
          <h3>
            We are only looking for open source repos that meet one or more of the following criteria:
          </h3>
          <ul className="smaller-words">
            <li>Existing Documentation</li>
            <li>More than 25+ contributors</li>
            <li>A [Static] Site Generator</li>
            <li>Trending on <a href="https://github.com/trending?since=weekly">GitHub weekly</a> and <a href="https://changelog.com/nightly">Changelog Nightly</a></li>
          </ul>
          <hr />
          <div className="grid-full form">
            <p>
              <label>Name: </label>
              <input className="support-input-form" onChange={this.handleNameChange} value={name} type="text" name="sitename" required />
            </p>
            <p>
              <label>Link: </label>
              <input className="boxed-input light-shadow" onChange={this.handleUrlChange} value={url} type="url" name="contentlink" required />
            </p>
            <p>
              <label>Owner: </label>
              <input className="boxed-input light-shadow" onChange={this.handleOwnerChange} value={owner && owner.login} name="repoowner" required />
            </p>
            <p>
              <label>Contributors: </label>
              <input className="boxed-input light-shadow" onChange={this.handleContributorsChange} value={this.state.contributors} name="contributors" />
            </p>
            <p>
              <label>Stars: </label>
              <input className="boxed-input light-shadow" onChange={this.handleStarsChange} value={stargazers && stargazers.totalCount} type="text" name="stars" required />
            </p>
            <p>
              <label>Forks: </label>
              <input className="boxed-input light-shadow" onChange={this.handleForksChange} value={forks && forks.totalCount} type="text" name="forks" required />
            </p>
            <p>
              <label>Issues: </label>
              <input className="boxed-input light-shadow" onChange={this.handleIssuesChange} value={issues && issues.totalCount} type="text" name="issues" required />
            </p>
            <p>
              <textarea className="boxed-input text-box light-shadow" onChange={this.handleDescriptionChange} value={description} type="text" placeholder="Note about this repo" name="notes"></textarea>
            </p>
            <p>
              <button onClick={this.sendDataToFireBase} className="button-ui-primary">Send</button>
            </p>
          </div>
          <div className="shadow"></div>
        </div>
      </div>
    );
  }
};

export default Form;
