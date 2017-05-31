import React, {Component} from "react";
import api from "./lib/apiGraphQL";

class Issues extends Component {
  state = {issues: null, offset: 0, cursor: null, totalCount: null}

  componentDidUpdate(prevProps) {
    const {repoName, owner} = this.props;

    if (prevProps.owner !== null && prevProps.owner !== owner) {
      api.fetchRepositoryIssues(owner, repoName).then((response) => {
        const {data, totalCount} = response.data.data.repositoryOwner.repository.issues;
        this.setState({
          issues: data,
          totalCount
        });
      });
    }
  }

  fetchMore = () => {
    const {repoName, owner} = this.props;
    api.fetchRepositoryIssues(owner, repoName).then((response) => {
      const {data, totalCount} = response.data.data.repositoryOwner.repository.issues;
      this.setState({
        issues: data,
        totalCount
      });
    });
  }

  handleNextIssues = () => {
  }

  handlePreviousIssues = () => {
  }

  render() {
    const {owner} = this.props;
    const {issues, totalCount, offset} = this.state;
    const totalPages = totalCount / 5;
    const currentPage = (offset / 5) + 1;

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

        <button
            onClick={this.handlePreviousIssues}
            className="button-ui-primary"
        >
          Previous
        </button>
        <button
            onClick={() => this.handleNextIssues}
            className="button-ui-primary"
        >
          Next
        </button>
        Page {currentPage}/{totalPages}
      </div>
      : <p>...Loading</p>
    ;
  }
}

export default Issues;

