import React, {useState, useEffect} from "react";
import Form from "./NoteForm";
import Issues from "./Issues";
import api from "../lib/apiGraphQL";
import {SpaceBetween} from "../styles/Grid";

function Repository({match}) {
  const {
    params: {repoName, repoOwner, id},
  } = match;
  const [repository, setRepository] = useState(null);
  const [note, setNote] = useState(location.note);
  const [issueId, setIssueId] = useState();

  useEffect(() => {
    api.fetchRepositoryData(repoOwner, repoName).then(res => {
      setRepository(res.data.gitHub.repositoryOwner.repository);
    });

    api.fetchGoalQuery(parseInt(id)).then(res => {
      const {id, body} = res.data.gitHub.viewer.repository.issue;
      setNote(body);
      setIssueId(id);
    });
  }, []);

  const {url, stargazers, forks, issues, name, nameWithOwner, description, owner} = repository || {};

  return (
    <div>
      {repository ? (
        <div>
          <a style={{textDecoration: "none"}} href={url} target="_blank">
            <h1>{name}</h1>
          </a>
          <p>{description}</p>
          <p>{issues.totalCount} issues</p>
          <p>{forks.totalCount} forks</p>
          <p>{stargazers.totalCount} ★</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      {owner && (
        <SpaceBetween>
          <Issues repoName={name} owner={owner.login} />
          <Form note={note} goalId={issueId} repoName={nameWithOwner} />
        </SpaceBetween>
      )}
    </div>
  );
}

export default Repository;
