import React from "react";
import Form from "./NoteForm";
import Issues from "./Issues";
import {graphql} from "react-apollo";
import gql from "graphql-tag";

const Repository = ({data}) => {
  const {Repository} = data;
  const {
    id, stars, forksCount, issuesCount, name, description, notes, owner
  } = Repository || {};

  return (
    <div>
      {Repository ?
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
          <p>{issuesCount} issues</p>
          <p>{forksCount} forks</p>
          <p>{stars} ★'s</p>
        </div>
      : <p>Loading...</p>}
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <Form notes={notes} repoId={id} repoName={name} />
        <Issues repoName={name} owner={owner}/>
      </div>
    </div>
  );
};

const RepoQuery = gql`query RepositoryQuery($id: ID!) {
  Repository(id: $id) {
    id
    name
    owner
    url
    issuesCount: issues
    forksCount: forks
    stars: stargazers
    notes
    description
  }
}`;

const RepositoryWithData = graphql(RepoQuery, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.match.params.id
    }
  })
})(Repository);

export default RepositoryWithData;
