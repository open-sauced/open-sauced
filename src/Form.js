import React, {Component} from "react";
import api from "./lib/apiGraphQL"
import './button.css';

class Form extends Component {
  constructor(props) {
    super(props)
    this.setUrl = this.setUrl.bind(this);
    this.fetchRepoData = this.fetchRepoData.bind(this);
    this.state = {
      uri: null,
      repo: null,
      name: null,
      data: {}
    };
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
    console.log(this.state.data)
    const {name, url, description, forks, owner, stargazers, issues} = this.state.data
    return (
      <div className="Form grid">
        <h2 className="title">Enter a GitHub URL</h2>
        <div className="">
          <div name="">
            <input className="urlForm" onChange={this.setUrl} value={this.state.url} placeholder="https://github.com/netlify/netlify-cms"/>
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
          <form name="grid-full form user-content-submission" action="thank-you" netlify>
            <p>
              <label>Name: </label>
              <input className="support-input-form" value={name} type="text" name="sitename" required />
            </p>
            <p>
              <label>Link: </label>
              <input className="boxed-input light-shadow" value={url} type="url" name="contentlink" required />
            </p>
            <p>
              <label>Owner: </label>
              <input className="boxed-input light-shadow" value={owner && owner.login} name="repoowner" required />
            </p>
            <p>
              <label>Contributors: </label>
              <input className="boxed-input light-shadow" type="text" name="contributors" />
            </p>
            <p>
              <label>Stars: </label>
              <input className="boxed-input light-shadow" value={stargazers && stargazers.totalCount} type="text" name="stars" required />
            </p>
            <p>
              <label>Forks: </label>
              <input className="boxed-input light-shadow" value={forks && forks.totalCount} type="text" name="forks" required />
            </p>
            <p>
              <label>Issues: </label>
              <input className="boxed-input light-shadow" value={issues && issues.totalCount} type="text" name="issues" required />
            </p>
            <p>
              <textarea className="boxed-input text-box light-shadow" value={description} type="text" placeholder="Note about this repo" name="notes"></textarea>
            </p>
            <p>
              <button className="button-ui-primary">Send</button>
            </p>
          </form>
          <div className="shadow"></div>
        </div>
      </div>
    );
  }
};

export default Form;
