import gql from "graphql-tag";

export const updateViewer = gql`
  mutation updateViewer($id: ID!, $email: String!) {
    updateViewer(id: $id, email: $email) {
      id
    }
  }
`;

export const createViewer = gql`
  mutation createViewer($identityID: String, $email: String!) {
    updateViewer(identityId: $identityId, email: $email) {
      id
    }
  }
`;
