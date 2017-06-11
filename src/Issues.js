import React, {Component} from "react";
import Button from "./styles/Button";
import api from "./lib/apiGraphQL";

class Issues extends Component {
  state = {issues: null, cursor: null, totalCount: 0, offset: 0}

  componentDidUpdate(prevProps, prevState) {
    const {repoName, owner} = this.props;

    if (prevProps.owner !== null && prevProps.owner !== owner) {
      api.fetchRepositoryIssues(owner, repoName).then((response) => {
        const {data, totalCount} = response.data.data.repositoryOwner.repository.issues;
        const lastIssue = data[data.length - 1];
        const {cursor} = lastIssue;
        this.setState({
          issues: data,
          totalCount,
          cursor
        });
      });
    }
  }

  handleNextIssues = () => {
    const {repoName, owner} = this.props;
    const {cursor, offset} = this.state;
    api.fetchRepositoryIssues(owner, repoName, cursor).then((response) => {
      const {data, totalCount} = response.data.data.repositoryOwner.repository.issues;
      const firstIssue = data[data.length - 1];
      const newCursor = firstIssue.cursor;
      this.setState({
        issues: data,
        totalCount,
        cursor: newCursor,
        offset: offset + 5,
      });
    });
  }

  handlePreviousIssues = () => {
    const {repoName, owner} = this.props;
    const {cursor, offset} = this.state;
    api.fetchRepositoryIssues(owner, repoName, cursor, true).then((response) => {
      const {data, totalCount} = response.data.data.repositoryOwner.repository.issues;
      const newCursor = data[0].newCursor;
      this.setState({
        issues: data,
        totalCount,
        cursor: newCursor,
        offset: offset - 5,
      });
    });
  }

  render() {
    const {owner} = this.props;
    const {issues, totalCount, offset} = this.state;
    const totalPages = Math.round(totalCount / 5);
    console.log("total", totalCount);
    const currentPage = (offset / 5) + 1;

    return owner ?
      <div style={{flex: 2, marginRight: 10}}>
        <ul>
          {issues && issues.map((issue) => (
            <li key={issue.node.id}>
              <a style={{fontSize: 16}} target="_blank" href={issue.node.url}>
                {issue.node.title}
                {issue.labels && issue.labels.data.map((label) => label.name)}
              </a>
            </li>
          ))}
        </ul>

        <div style={{display: "flex", alignItems: "baseline"}}>
          {offset > 0 &&
            <Button onClick={this.handlePreviousIssues}>
              Previous
            </Button>
          }
          <p style={{marginRight: 8}}>{currentPage}/{totalPages}</p>
          {currentPage !== totalPages &&
            <Button onClick={this.handleNextIssues}>
              Next
            </Button>
          }
        </div>
      </div>
      : <p>...Loading</p>
    ;
  }
}

export default Issues;

