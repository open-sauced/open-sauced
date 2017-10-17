import gql from "graphql-tag";

export const createViewer = gql`
  mutation createViewer($identityId: String!, $email: String!) {
    createViewer(identityId: $identityId, email: $email) {
      id
    }
  }
`;

export const viewerQuery = gql`
  query viewerQuery($id: String!){
    viewer: Viewer(identityId: $id) {
      id
    }
  }
`;
