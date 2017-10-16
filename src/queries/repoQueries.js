import gql from "graphql-tag";

export const allRepoQuery = gql`
  query repos($id: String!) {
    allRepositories(filter: {viewer: {identityId: $id}}) {
      id
      name
    }
  }
`;

export const repoQuery = gql`
  query RepositoryQuery($id: ID!) {
    repository: Repository(id: $id) {
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
  }
`;

export const createRepo = gql`
  mutation createRepository(
    $viewerId: String!
    $name: String!
    $url: String!
    $owner: String!
    $stargazers: Int
    $issues: Int
    $forks: Int
    $description: String
  ) {
    createRepository(
      viewerId: $viewerId
      name: $name
      url: $url
      owner: $owner
      stargazers: $stargazers
      issues: $issues
      forks: $forks
      description: $description
    ) {
      id
      name
    }
  }
`;

export const updateRepo = gql`
  mutation updateRepository($id: ID!, $notes: String) {
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
