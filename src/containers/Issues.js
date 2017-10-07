import React, {Component} from "react";
import api from "../lib/apiGraphQL";
import {FlexCenter, IssuesColumn} from "../styles/Grid";
import PointerLink from "../styles/PointerLink";
import {TinyFont} from "../styles/Typography";
import {chevronRight, chevronLeft} from "../icons";

class Issues extends Component {
  state = {issues: null, cursor: null, totalCount: 0, offset: 0};

  componentDidUpdate(prevProps, prevState) {
    const {repoName, owner} = this.props;

    if (prevProps.owner !== null && prevProps.owner !== owner) {
      api.fetchRepositoryIssues(owner, repoName).then(response => {
        const {data, totalCount} = response.data.data.repositoryOwner.repository.issues;
        const lastIssue = data[data.length - 1];
        const {cursor} = lastIssue;
        this.setState({
          issues: data,
          totalCount,
          cursor,
        });
      });
    }
  }

  handleNextIssues = () => {
    const {repoName, owner} = this.props;
    const {cursor, offset} = this.state;
    api.fetchRepositoryIssues(owner, repoName, cursor).then(response => {
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
  };

  handlePreviousIssues = () => {
    const {repoName, owner} = this.props;
    const {cursor, offset} = this.state;
    api.fetchRepositoryIssues(owner, repoName, cursor, true).then(response => {
      const {data, totalCount} = response.data.data.repositoryOwner.repository.issues;
      const newCursor = data[0].newCursor;
      this.setState({
        issues: data,
        totalCount,
        cursor: newCursor,
        offset: offset - 5,
      });
    });
  };

  render() {
    const {owner} = this.props;
    const {issues, totalCount, offset} = this.state;
    const totalPages = Math.round(totalCount / 5);
    const currentPage = offset / 5 + 1;

    return owner ? (
      <IssuesColumn>
        <ul>
          {issues &&
            issues.map(issue => (
              <li key={issue.node.id}>
                <a target="_blank" href={issue.node.url}>
                  <TinyFont>
                    {issue.node.title}
                    <div style={{display: "flex"}}>{issue.labels && issue.labels.data.map(label => label.name)}</div>
                  </TinyFont>
                </a>
              </li>
            ))}
        </ul>

        <FlexCenter>
          {offset > 0 && (
            <PointerLink onClick={this.handlePreviousIssues}>
              <img alt="previous" src={chevronLeft} />
            </PointerLink>
          )}
          <TinyFont>
            {currentPage}/{totalPages}
          </TinyFont>
          {currentPage !== totalPages && (
            <PointerLink onClick={this.handleNextIssues}>
              <img alt="previous" src={chevronRight} />
            </PointerLink>
          )}
        </FlexCenter>
      </IssuesColumn>
    ) : (
      <p>...Loading</p>
    );
  }
}

export default Issues;
