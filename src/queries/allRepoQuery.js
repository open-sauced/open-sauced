import gql from "graphql-tag";

const allRepoQuery = gql`
 query {
    allRepositories {
      id
      name
    }
  }
`;

export default allRepoQuery;
