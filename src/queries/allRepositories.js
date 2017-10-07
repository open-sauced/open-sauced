import gql from "graphql-tag";

const allRepoQuery = gql`
 query {
    allRepositories {
      id
      name
    }
  }
`;

const createRepo = gql`
  mutation updateRepository($notes: String, $id: ID!) {
    updateRepository(id: $id, notes: $notes) {
      id
      notes
    }
  }
`;

const deleteRepo = gql`
  mutation deleteRepo($id: ID!) {
    deleteRepository(id: $id) {
      id
    }
  }
`;

export default {allRepoQuery, createRepo, deleteRepo};
