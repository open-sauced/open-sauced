import React from "react";
import Form from "./NoteForm";
import Issues from "./Issues";
import {graphql} from "react-apollo";
import {repoQuery} from "../queries";

export const Repository = ({data}) => {
  const {repository} = data;
  const {id, url, stars, forksCount, issuesCount, name, description, notes, owner} = repository || {};

  return (
    <div>
      {repository ? (
        <div>
          <a style={{textDecoration: "none"}} href={url} target="_blank">
            <h1>{name}</h1>
          </a>
          <p>{description}</p>
          <p>{issuesCount} issues</p>
          <p>{forksCount} forks</p>
          <p>{stars} ★'s</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <Issues repoName={name} owner={owner} />
        <Form notes={notes} repoId={id} repoName={name} />
      </div>
    </div>
  );
};

const RepositoryWithData = graphql(repoQuery, {
  options: ownProps => ({
    variables: {
      id: ownProps.match.params.id,
    },
  }),
})(Repository);

export default RepositoryWithData;
