import React, {useState, useEffect} from "react";
import Form from "../components/NoteForm";
import Card from "../components/Card";
import Issues from "../components/Issues";
import Contributions from "../components/Contributions";
import DetailInfo from "../components/DetailInfo";
import api from "../lib/apiGraphQL";
import RepositoryAvatar from "../styles/RepositoryAvatar";
import Illustration from "../styles/Illustration";
import {ErrorMessage} from "../styles/Typography";
import {SpaceBetween} from "../styles/Grid";
import {diary} from "../illustrations";
import {ButtonBoard, RepositoryContext} from "../styles/Card";
import {Spinner} from "../styles/Spinner";
import {Flex, FormColumn, IssuesColumn} from "../styles/Grid";
import {humanizeNumber} from "../lib/humanizeNumber";
import {getUserFromJwt} from "../lib/identityActions";
import Config from "../config";
import Button from "../styles/Button";
import {RepoForkedIcon} from "@primer/octicons-react";

function Repository({match}) {
  const {
    params: {repoName, repoOwner, id},
  } = match;
  const [repository, setRepository] = useState(null);
  const [error, setError] = useState(null);
  const [note, setNote] = useState(location.note);
  const [issueId, setIssueId] = useState();
  const [isForkLoading, setIsForkLoading] = useState(true);
  const [isForked, setIsForked] = useState(false);
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

    api
      .fetchUserForkCount(repoName, repoOwner)
      .then(({data, errors}) => {
        if (errors && errors.length > 0) {
          setError(`"${errors[0].message}"`);
          return;
        }

        setIsForked(!!data.gitHub.repository.forks.totalCount);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsForkLoading(false));
  }, []);

  const forkRepository = () => {
    setIsForkLoading(true);

    api
      .forkRepository(repoName, repoOwner)
      .then(res => {
        const {errors} = res;

        if (errors && errors.length > 0) {
          setError(`"${errors[0].message}"`);
          return;
        }

        setIsForked(true);
      })
      .catch(e => console.log(e))
      .finally(() => setIsForkLoading(false));
  };

  const user = getUserFromJwt(Config.auth);

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
                {nameWithOwner ? <h1><RepositoryAvatar
                  alt="avatar"
                  src={`https://avatars.githubusercontent.com/${nameWithOwner.split("/")[0]}`}
                />{nameWithOwner}</h1> : <h1>Loading...</h1>}
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
              {isForked ?
                <a rel="noreferrer" target="_blank" href={`https://github.com/${user.login}/${repoName}`}>
                  <Button disabled={isForkLoading} data-test="go-to-fork-button">View fork</Button>
                </a> :
                <Button disabled={isForkLoading} onClick={forkRepository}><RepoForkedIcon verticalAlign="middle" /> Fork</Button>}
              <h4>Contributors</h4>
              <div className="contributors">
                {contributors.slice(0, contributorsShown).map((user, key) => (
                  <a href={`https://github.com/${user.login}`} rel="noreferrer" target="_blank" key={key}>
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
                <DetailInfo text={`${humanizeNumber(issues.totalCount)} issues`} icon="IssueOpenedIcon" />
              ) : (
                <DetailInfo text={`${humanizeNumber(pullRequests.totalCount)} pull requests`} icon="GitPullRequestIcon" />
              )}
              <DetailInfo text={`${humanizeNumber(forks.totalCount)} forks`} icon="RepoForkedIcon" />
              <DetailInfo text={`${humanizeNumber(stargazers.totalCount)} stars`} icon="StarIcon" />
              {licenseInfo && <DetailInfo text={`${licenseInfo.name}`} icon="LawIcon" />}
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
