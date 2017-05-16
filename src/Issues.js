import React, {Component} from "react";
import api from "./lib/apiGraphQL";

class Issues extends Component {
  state = {issues: null}

  componentDidUpdate(prevProps) {
    const {repoName, owner} = this.props;

    if (prevProps.owner !== null && prevProps.owner !== owner) {
      api.fetchRepositoryIssues(owner, repoName).then((response) => {
        const data = response.data.data.repositoryOwner.repository.issues.data;
        this.setState({
          issues: data
        });
      });
    }
  }

  render() {
    const {owner} = this.props;
    const {issues} = this.state;

    return owner ?
      <div style={{flex: 2, marginLeft: 10}}>
        <ul>
          {issues && issues.map((issue) => (
            <li key={issue.node.id}>
              <a target="_blank" href={issue.node.url}>
                {issue.node.title}
                {issue.labels && issue.labels.data.map((label) => label.name)}
              </a>
            </li>
          ))}
        </ul>
      </div>
      : <p>...Loading</p>
    ;
  }
}

export default Issues;

