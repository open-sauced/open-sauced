import Config from "../config";

const fetchOneGraph = Config.fetchOneGraph;

const operationsDoc = `
  query ContributedRepoQuery {
    gitHub {
      viewer {
        repositoriesContributedTo(
          first: 10
          orderBy: { direction: DESC, field: CREATED_AT }
        ) {
          nodes {
            id
            nameWithOwner
            name
            url
          }
        }
      }
    }
  }

  query RepoQuery($repo: String!, $owner: String!) {
    gitHub {
      repositoryOwner(login: $owner) {
        repository(name: $repo) {
          name
          url
          owner {
            login
            repositories {
              totalCount
            }
          }
          description
          forks {
            totalCount
          }
          issues {
            totalCount
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }

  query IssuesBeforeQuery($owner: String!, $repo: String!, $cursor: String) {
    gitHub {
      repositoryOwner(login: $owner) {
        repository(name: $repo) {
          issues(first: 5, states: OPEN, orderBy: {field: CREATED_AT, direction: DESC}, before: $cursor) {
            totalCount
            data: edges {
              cursor
              node {
                id
                title
                url
                state
                author {
                  login
                }
                labels(first: 5) {
                  data: edges {
                    node {
                      id
                      name
                    }
                  }
                }
                createdAt
              }
            }
          }
        }
      }
    }
  }

  query IssuesAfterQuery($owner: String!, $repo: String!, $cursor: String) {
    gitHub {
      repositoryOwner(login: $owner) {
        repository(name: $repo) {
          issues(first: 5, states: OPEN, orderBy: {field: CREATED_AT, direction: DESC}, after: $cursor) {
            totalCount
            data: edges {
              cursor
              node {
                id
                title
                url
                state
                author {
                  login
                }
                labels(first: 5) {
                  data: edges {
                    node {
                      id
                      name
                    }
                  }
                }
                createdAt
              }
            }
          }
        }
      }
    }
  }
`;

function fetchContributedRepoQuery() {
  return fetchOneGraph(operationsDoc, "ContributedRepoQuery");
}

function fetchRepoQuery(owner, repo) {
  return fetchOneGraph(operationsDoc, "RepoQuery", {repo: repo, owner: owner});
}

function fetchIssuesBeforeQuery(owner, repo, cursor) {
  return fetchOneGraph(operationsDoc, "IssuesBeforeQuery", {owner: owner, repo: repo, cursor: cursor});
}

function fetchIssuesAfterQuery(owner, repo, cursor) {
  return fetchOneGraph(operationsDoc, "IssuesAfterQuery", {owner: owner, repo: repo, cursor: cursor});
}
const api = {
  fetchRepositoryData: fetchRepoQuery, fetchContributedRepoQuery,

  fetchRepositoryIssues: (owner, repo, cursor, previous = false) => {
    const issueFetcher = cursor && previous ? fetchIssuesBeforeQuery : fetchIssuesAfterQuery;

    issueFetcher(owner, repo, cursor);
  },
};

export default api;
