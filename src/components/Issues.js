import React, {useState, useEffect} from "react";
import {FlexCenter} from "../styles/Grid";
import {EmptyPlaceholder} from "../styles/EmptyPlaceholder";
import api from "../lib/apiGraphQL";
import Card from "./Card";
import List from "../styles/List";
import IssuesListItem from "../components/IssueListItem";
import {InputButton} from "../styles/Button";
import {CardPadding, CardHeader} from "../styles/Card";
import Octicon, {getIconByName} from "@primer/octicons-react";
import {Spinner} from "../styles/Spinner";

function Issues({repoName, owner}) {
  const [issues, setIssues] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cursor, setCursor] = useState(null);
  const [totalCount, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setLoading(true);
    api.fetchIssuesQuery(owner, repoName).then(response => {
      const {data, totalCount} = response.data.gitHub.repositoryOwner.repository.issues;
      const lastIssue = totalCount > 0 ? data[data.length - 1] : {};
      const {cursor} = lastIssue;

      setIssues(data);
      setCursor(cursor);
      setTotal(totalCount);
      setLoading(false);
    });
  }, []);

  const _handleNextIssues = () => {
    api.fetchRepositoryIssues(owner, repoName, cursor).then(response => {
      const {data, totalCount} = response.data.gitHub.repositoryOwner.repository.issues;
      const firstIssue = data[data.length - 1];
      const newCursor = firstIssue.cursor;
      setIssues(data);
      setCursor(newCursor);
      setTotal(totalCount);
      setOffset(offset + 5);
    });
  };

  const _handlePreviousIssues = () => {
    api.fetchRepositoryIssues(owner, repoName, cursor, true).then(response => {
      const {data, totalCount} = response.data.gitHub.repositoryOwner.repository.issues;
      const newCursor = data[0].newCursor;
      setIssues(data);
      setCursor(newCursor);
      setTotal(totalCount);
      setOffset(offset - 5);
    });
  };

  const totalPages = Math.round(totalCount / 5);
  const currentPage = offset / 5 + 1;

  return owner ? (
    totalCount > 0 ? (
      <Card fitted>
        <CardHeader>
          <h1>Issues</h1>
        </CardHeader>
        <List>
          {issues &&
            issues.map(issue => (
              <li key={issue.node.id}>
                <a target="_blank" href={issue.node.url}>
                  <IssuesListItem
                    type="issues"
                    title={issue.node.title}
                    labels={issue.node.labels}
                    author={issue.node.author.login}
                    opened={issue.node.createdAt}
                  />
                </a>
              </li>
            ))}
          <CardPadding>
            <FlexCenter className="pagination-buttons">
              {offset > 0 && <InputButton onClick={_handlePreviousIssues}>Prev</InputButton>}
              {currentPage !== totalPages && <InputButton onClick={_handleNextIssues}>Next</InputButton>}
            </FlexCenter>
          </CardPadding>
        </List>
      </Card>
    ) : (
      loading ? (
        <Spinner />
      ) : (
        <EmptyPlaceholder style={{marginTop: 100}}>
          <div style={{color: "grey"}}>
            <Octicon size="large" verticalAlign="middle" icon={getIconByName("issue-opened")} />
          </div>
          <div className="helper">
            No Issues found
          </div>
        </EmptyPlaceholder>
      )
    )
  ) : (
    <p>...Loading</p>
  );
}

export default Issues;
