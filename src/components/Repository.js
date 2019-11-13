import React, {useState, useEffect} from "react";
import Form from "../components/NoteForm";
import Card from "../components/Card";
import Issues from "../components/Issues";
import DetailInfo from "../components/DetailInfo";
import api from "../lib/apiGraphQL";
import Illustration from "../styles/Illustration";
import {SpaceBetween} from "../styles/Grid";
import {diary} from "../illustrations";
import {ContextStyle} from "../styles/Card";

function Repository({match}) {
  const {
    params: {repoName, repoOwner, id},
  } = match;
  const [repository, setRepository] = useState(null);
  const [note, setNote] = useState(location.note);
  const [issueId, setIssueId] = useState();

  useEffect(() => {
    api
      .fetchRepositoryData(repoOwner, repoName)
      .then(res => {
        setRepository(res.data.gitHub.repositoryOwner.repository);
      })
      .catch(e => console.error);

    api
      .fetchGoalQuery(parseInt(id))
      .then(res => {
        const {id, body} = res.data.gitHub.viewer.repository.issue;
        setNote(body);
        setIssueId(id);
      })
      .catch(e => console.error);
  }, []);

  const {url, stargazers, forks, issues, name, nameWithOwner, owner} = repository || {};

  return (
    <React.Fragment>
      <ContextStyle>
        <SpaceBetween>
          <div className="context-div">
            <a style={{textDecoration: "none"}} href={url} target="_blank"><h1>{nameWithOwner}</h1></a>
            <p>
              Use the issue list to find things to work on. The notes form is here to also assist with the tracking contributions for the {name} repository.
            </p>
            <small>
              <em>
                <a href="https://opensource.guide/how-to-contribute/" target="_blank">
                  Learn how to contirbute to open source projects
                </a>
              </em>
            </small>
          </div>
          <Illustration src={diary} />
        </SpaceBetween>
      </ContextStyle>

      {repository ? (
        <Card>
          <DetailInfo text={`${issues.totalCount} stars`} icon="issue-opened"/>
          <DetailInfo text={`${forks.totalCount} forks`} icon="repo-forked"/>
          <DetailInfo text={`${stargazers.totalCount} stars`} icon="star"/>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
      {owner && (
        <SpaceBetween>
          <Issues repoName={name} owner={owner.login} />
          <Form note={note} goalId={issueId} repoName={nameWithOwner} />
        </SpaceBetween>
      )}
    </React.Fragment>
  );
}

export default Repository;
