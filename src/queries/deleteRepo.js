import gql from "graphql-tag";

const deleteRepo = gql`
  mutation deleteRepo($id: ID!) {
    deleteRepository(id: $id) {
      id
    }
  }
`;

export default deleteRepo;
