import React, {useState, useEffect} from "react";
import Form from "../components/NoteForm";
import Card from "../components/Card";
import Issues from "../components/Issues";
import Contributions from "../components/Contributions";
import DetailInfo from "../components/DetailInfo";
import api from "../lib/apiGraphQL";
import Illustration from "../styles/Illustration";
import {ErrorMessage} from "../styles/Typography";
import {SpaceBetween} from "../styles/Grid";
import {diary} from "../illustrations";
import {ContextStyle} from "../styles/Card";
import {Flex, FormColumn, IssuesColumn} from "../styles/Grid";

function Repository({match}) {
  const {
    params: {repoName, repoOwner, id},
  } = match;
  const [repository, setRepository] = useState(null);
  const [error, setError] = useState(null);
  const [note, setNote] = useState(location.note);
  const [issueId, setIssueId] = useState();

  useEffect(() => {
    api
      .fetchRepositoryData(repoOwner, repoName)
      .then(res => {
        const {errors, data} = res;

        if (errors && errors.length > 0) {
          setError(`"${errors[0].message}"`);
        }

        const repo = data.gitHub.repositoryOwner.repository;

        if (repo === null) {
          setError(`Repository "${repoOwner}/${repoName}" not found`);
        }

        setRepository(repo);
      })
      .catch(e => {
        console.log(e);
      });

    api
      .fetchGoalQuery(parseInt(id))
      .then(res => {
        const {id, body} = res.data.gitHub.viewer.repository.issue;
        setNote(body);
        setIssueId(id);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  const {url, stargazers, forks, issues, name, nameWithOwner, owner} = repository || {};

  return (
    <React.Fragment>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ContextStyle>
        <SpaceBetween>
          <div className="context-div">
            <a style={{textDecoration: "none"}} href={url} target="_blank">
              <h1>{nameWithOwner}</h1>
            </a>
            <p>
              Use the issue list to find things to work on. The notes form is here to also assist with the tracking
              contributions for the {name} repository.
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

      <Flex>
        <IssuesColumn>{owner && <Issues repoName={name} owner={owner.login} />}</IssuesColumn>
        {repository ? (
          <FormColumn>
            <Card>
              <DetailInfo text={`${issues.totalCount} issues`} icon="issue-opened" />
              <DetailInfo text={`${forks.totalCount} forks`} icon="repo-forked" />
              <DetailInfo text={`${stargazers.totalCount} stars`} icon="star" />
            </Card>
            <Contributions repoName={name} owner={owner.login} />
            {owner && <Form note={note} goalId={issueId} repoName={nameWithOwner} />}
          </FormColumn>
        ) : (
          !error && <p>Loading...</p>
        )}
      </Flex>
    </React.Fragment>
  );
}

export default Repository;
