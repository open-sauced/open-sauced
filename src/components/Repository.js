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
import {Spinner} from "../styles/Spinner";
import {Flex, FormColumn, IssuesColumn} from "../styles/Grid";
import {humanizeNumber} from "../lib/humanizeNumber";

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
    <section>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ContextStyle>
        <SpaceBetween>
          <div>
            <a style={{textDecoration: "none"}} href={url} rel="noreferrer" target="_blank">
              {nameWithOwner ? (
                <h1>{nameWithOwner}</h1>
              ) : (
                <h1>Loading...</h1>
              )}
            </a>
            <p>
              Use the issue list to find things to work on. The notes form is here to also assist with the tracking
              contributions for the {name} repository.
            </p>
            <small>
              <em>
                <a href="https://opensource.guide/how-to-contribute/" rel="noreferrer" target="_blank">
                  Learn how to contribute to open source projects
                </a>
              </em>
            </small>
            <div className="languages">
              {repository && repository.languages.nodes.map((language, key) => (
                <span key={key}>
                  <span className="dot"  style={{color: language.color}}>•</span>
                  <span className="name">{language.name}</span>
                </span>
              ))}
              <span className="more">
                {repository && repository.languages.totalCount > 3 && `+${repository.languages.totalCount - 3} languages`}
              </span>
            </div>
          </div>
          <Illustration src={diary} />
        </SpaceBetween>
      </ContextStyle>

      <Flex>
        <IssuesColumn>{owner && <Issues repoName={name} owner={owner.login} />}</IssuesColumn>
        {repository ? (
          <FormColumn>
            <Card>
              <DetailInfo text={`${humanizeNumber(issues.totalCount)} issues`} icon="issue-opened" />
              <DetailInfo text={`${humanizeNumber(forks.totalCount)} forks`} icon="repo-forked" />
              <DetailInfo text={`${humanizeNumber(stargazers.totalCount)} stars`} icon="star" />
            </Card>
            <Contributions repoName={name} owner={owner.login} />
            {owner && <Form note={note} goalId={issueId} repoName={nameWithOwner} />}
          </FormColumn>
        ) : (
          !error && <Spinner />
        )}
      </Flex>
    </section>
  );
}

export default Repository;
