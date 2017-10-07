import gql from "graphql-tag";

const createRepo = gql`
  mutation updateRepository($notes: String, $id: ID!) {
    updateRepository(id: $id, notes: $notes) {
      id
      notes
    }
  }
`;

export default createRepo;
