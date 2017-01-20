import React, {Component} from "react";
import api from "./lib/apiGraphQL"
import RepoCount from "./Count";
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Form extends Component {
  constructor(props) {
    super(props)
    this.setUrl = this.setUrl.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleForksChange = this.handleForksChange.bind(this);
    this.handleIssuesChange = this.handleIssuesChange.bind(this);
    this.handleStarsChange = this.handleStarsChange.bind(this);
    this.handleOwnerChange = this.handleOwnerChange.bind(this);
    this.handleContributorsChange = this.handleContributorsChange.bind(this);
    this.fetchRepoData = this.fetchRepoData.bind(this);
    this.sendDataToApollo = this.sendDataToApollo.bind(this);
    this.state = {
      data: {},
      uri: '',
      contributors: '',
      name: '',
      url: '',
      description: '',
      forks: '',
      owner: '',
      stargazers: '',
      issues: ''
    };
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleUrlChange(e) {
    this.setState({url: e.target.value});
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }

  handleForksChange(e) {
    this.setState({forks: e.target.value});
  }

  handleIssuesChange(e) {
    this.setState({issues: e.target.value});
  }

  handleStarsChange(e) {
    this.setState({stargazers: e.target.value});
  }

  handleOwnerChange(e) {
    this.setState({owner: e.target.value});
  }

  handleContributorsChange(e) {
    this.setState({contributors: e.target.value});
  }

  sendDataToApollo() {
    const {name, url, description, forks, owner, stargazers, issues, contributors} = this.state

    this.props.mutate({variables: {
      name,
      url,
      owner,
      contributors,
      forks,
      stargazers,
      issues,
      description,
    }})
      .then(() => {
        this.setState(
          {data: {}, description: '', owner: '', stargazers: '', forks:
           '', issues: '', contributors: '', uri: '', url: '', name: ''}
        );
      })
      .catch((error) => console.log(error));
  }

  setUrl(e) {
    this.setState({url: e.target.value})
  }

  fetchRepoData() {
    const url = this.state.url.split("/")
    api.fetchRepositoryData(url[3], url[4]).then(
      (response) => {
        const data = response.data.data.repositoryOwner.repository;
        const {name, url, description, forks, owner, stargazers, issues} = data;
        this.setState({
          data: data,
          name: name,
          url: url,
          description: description,
          forks: forks.totalCount,
          owner: owner.login,
          stargazers: stargazers.totalCount,
          issues: issues.totalCount
        })
      }
    );
  }

  render() {
    const {repoData} = this.props;
    const {
      contributors, name, url, description, forks, owner, stargazers,
      issues
    } = this.state
    console.log(repoData.length)

    return (
      <div className="Form">
        <h2 className="title">Enter a GitHub URL</h2>
        <div className="">
          <div name="">
            <input className="utility-input urlForm" type="url" onChange={this.setUrl} value={url} placeholder="https://github.com/netlify/netlify-cms"/>
            <p>
              <button className="button-ui-default" onClick={this.fetchRepoData}>Scrape</button>
            </p>
          </div>
          <h3>
            We are only looking for open source repos that meet one or more of the following criteria:
          </h3>
          <ul className="smaller-words">
            <li>Existing Documentation</li>
            <li>More than 10+ contributors</li>
            <li>Active commits within the last month</li>
            <li>Trending on <a href="https://github.com/trending?since=weekly">GitHub weekly</a> and <a href="https://changelog.com/nightly">Changelog Nightly</a></li>
          </ul>
          <hr />
          <div className="grid-full form">
            <p>
              <input className="utility-input support-input-form" placeholder="Name" type="text" onChange={this.handleNameChange} value={name} type="text" name="sitename" required />
            </p>
            <p>
              <input className="utility-input boxed-input light-shadow" placeholder="Link" onChange={this.handleUrlChange} value={url} type="url" name="contentlink" required />
            </p>
            <p>
              <input className="utility-input boxed-input light-shadow" placeholder="Owner" onChange={this.handleOwnerChange} value={owner} name="repoowner" required />
            </p>
            <p>
              <input className="utility-input boxed-input light-shadow" placeholder="Contributors" onChange={this.handleContributorsChange} value={contributors} name="contributors" />
            </p>
            <p>
              <input className="utility-input boxed-input light-shadow" placeholder="Stars" onChange={this.handleStarsChange} value={stargazers} type="text" name="stars" required />
            </p>
            <p>
              <input className="utility-input boxed-input light-shadow" placeholder="Forks" onChange={this.handleForksChange} value={forks} type="text" name="forks" required />
            </p>
            <p>
              <input className="utility-input boxed-input light-shadow" placeholder="Issues" onChange={this.handleIssuesChange} value={issues} type="text" name="issues" required />
            </p>
            <p>
              <textarea className="utility-input boxed-input text-box light-shadow" onChange={this.handleDescriptionChange} value={description} type="text" placeholder="Note about this repo" name="notes"></textarea>
            </p>
            <RepoCount count={repoData.length} />
            <p>
              <button onClick={this.sendDataToApollo} className="button-ui-primary">Send</button>
            </p>
          </div>
          <div className="shadow"></div>
        </div>
      </div>
    );
  }
};

const createFormMutation = gql`
  mutation createRepository($name: String!, $url: String!, $owner: String!, $stargazers: Int, $issues: Int, $forks: Int, $description: String) {
    createRepository(name: $name, url: $url, owner: $owner, stargazers: $stargazers, issues: $issues, forks: $forks, description: $description) {
      id
    }
  }
`
const FormMutation = graphql(createFormMutation)(Form)

export default FormMutation;
