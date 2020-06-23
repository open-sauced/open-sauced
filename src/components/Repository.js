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
import {ButtonBoard, RepositoryContext} from "../styles/Card";
import {Spinner} from "../styles/Spinner";
import {Flex, FormColumn, IssuesColumn} from "../styles/Grid";
import {humanizeNumber} from "../lib/humanizeNumber";
import Button from "../styles/Button";

function Repository({match}) {
  const {
    params: {repoName, repoOwner, id},
  } = match;
  const [repository, setRepository] = useState(null);
  const [error, setError] = useState(null);
  const [note, setNote] = useState(location.note);
  const [issueId, setIssueId] = useState();
  const languagesShown = 3;
  const contributorsShown = 5;

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

  const {
    url,
    stargazers,
    forks,
    description,
    issues,
    pullRequests,
    name,
    nameWithOwner,
    owner,
    hasIssuesEnabled,
    contributors_oneGraph,
    licenseInfo,
  } = repository || {};
  const totalLangDiff = repository && repository.languages.totalCount - languagesShown;
  const contributors = repository && contributors_oneGraph.nodes.filter(user => !user.login.includes("[bot]"));
  return (
    <section>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Flex>
        <RepositoryContext>
          <SpaceBetween>
            <div>
              <a style={{textDecoration: "none"}} href={url} rel="noreferrer" target="_blank">
                {nameWithOwner ? <h1>{nameWithOwner}</h1> : <h1>Loading...</h1>}
              </a>
              <p>{description}</p>
              <small>
                <em>
                  <a href="https://opensource.guide/how-to-contribute/" rel="noreferrer" target="_blank">
                    Learn how to contribute to open source projects
                  </a>
                </em>
              </small>
              <div className="languages">
                {repository &&
                  repository.languages.nodes.map((language, key) => (
                    <span key={key}>
                      <span className="dot" style={{color: language.color}}>
                        •
                      </span>
                      <span className="name">{language.name}</span>
                    </span>
                  ))}
                <span className="more">
                  {repository &&
                    repository.languages.totalCount > languagesShown &&
                    `+${totalLangDiff} language${totalLangDiff !== 1 ? "s" : ""}`}
                </span>
              </div>
            </div>
            <Illustration src={diary} />
          </SpaceBetween>
        </RepositoryContext>
        <ButtonBoard>
          {repository ? (
            <span>
              <p>CodeTriage helps by picking a handful of open issues and delivering them directly to your inbox.</p>
              <a rel="noreferrer" target="_blank" href={`https://codetriage.com/${nameWithOwner}`}>
                <Button primary>Set up CodeTriage</Button>
              </a>
              <h4>Contributors</h4>
              <div className="contributors">
                {contributors.slice(0, contributorsShown).map((user, key) => (
                  <a href={`https://github.com/${user.login}`} rel="noreferrer" target="_blank">
                    <img
                      className="users"
                      key={key}
                      src={user.avatarUrl}
                      title={`${user.login} • ${user.contributionCount} contributions`}
                    />
                  </a>
                ))}
                {contributors.length > contributorsShown && (
                  <span className="more">
                    <a href={`${url}/graphs/contributors`} rel="noreferrer" target="_blank">
                      more...
                    </a>
                  </span>
                )}
              </div>
            </span>
          ) : (
            <h3>Loading...</h3>
          )}
        </ButtonBoard>
      </Flex>

      <Flex>
        <IssuesColumn>{owner && <Issues repoName={name} owner={owner.login} />}</IssuesColumn>
        {repository ? (
          <FormColumn>
            <Card>
              {hasIssuesEnabled ? (
                <DetailInfo text={`${humanizeNumber(issues.totalCount)} issues`} icon="issue-opened" />
              ) : (
                <DetailInfo text={`${humanizeNumber(pullRequests.totalCount)} pull requests`} icon="git-pull-request" />
              )}
              <DetailInfo text={`${humanizeNumber(forks.totalCount)} forks`} icon="repo-forked" />
              <DetailInfo text={`${humanizeNumber(stargazers.totalCount)} stars`} icon="star" />
              {licenseInfo && <DetailInfo text={`${licenseInfo.name}`} icon="law" />}
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
