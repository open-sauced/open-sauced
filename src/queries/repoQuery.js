import gql from "graphql-tag";

const repoQuery = gql`query RepositoryQuery($id: ID!) {
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

export default repoQuery;
