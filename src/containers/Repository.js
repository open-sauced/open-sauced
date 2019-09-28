import React, {useState, useEffect} from "react";
import Form from "./NoteForm";
import Issues from "./Issues";
import api from "../lib/apiGraphQL";

function Repository({match, location}) {
  const [repository, setRepository] = useState(null);

  useEffect(() => {
    const {
      params: {repoName, repoOwner},
    } = match;


    api.fetchRepositoryData(repoOwner, repoName).then(response => {
      setRepository(response.data.gitHub.repositoryOwner.repository);
    });
  }, [repository]);

  const {url, stargazers, forks, issues, name, nameWithOwner, description, owner} = repository || {};
  const {goalId, note} = location;

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
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <Issues repoName={name} owner={owner.login} />
          <Form note={note} goalId={goalId} repoName={nameWithOwner} />
        </div>
      )}
    </div>
  );
}

export default Repository;
