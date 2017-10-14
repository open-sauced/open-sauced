import gql from "graphql-tag";

export const allRepoQuery = gql`
 query {
    allRepositories {
      id
      name
    }
  }
`;

export const repoQuery = gql`query RepositoryQuery($id: ID!) {
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

export const createRepo = gql`
  mutation updateRepository($notes: String, $id: ID!) {
    updateRepository(id: $id, notes: $notes) {
      id
      notes
    }
  }
`;

export const deleteRepo = gql`
  mutation deleteRepo($id: ID!) {
    deleteRepository(id: $id) {
      id
    }
  }
`;
