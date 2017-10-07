import gql from "graphql-tag";

const createFormMutation = gql`
  mutation createRepository($name: String!, $url: String!, $owner: String!, $stargazers: Int, $issues: Int, $forks: Int, $description: String) {
    createRepository(name: $name, url: $url, owner: $owner, stargazers: $stargazers, issues: $issues, forks: $forks, description: $description) {
      id
      name
    }
  }
`;

export default createFormMutation;
