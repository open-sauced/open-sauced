import Config from "../config";
// TODO: Write docs on how persisted queries work
import {
  persistedForkFetch,
  persistedIssuesFetch,
  persistedInteractionsFetch,
  persistedGoalFetch,
  persistedRepoDataFetch,
  persistedDeploymentFetch,
  persistedIssuesAfterFetch,
  persistedIssuesBeforeFetch,
  persistedIssuesByLabelFetch,
  persistedViewerStars,
  persistedIssuesByLabelAfterFetch,
  persistedIssuesByLabelBeforeFetch,
} from "./persistedGraphQL";

const fetchOneGraph = Config.fetchOneGraph;

const operationsDoc = `
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
                      color
                    }
                  }
                }
                comments {
                  totalCount
                }
                milestone {
                  title
                }
                participants(first: 3) {
                  totalCount
                  nodes {
                    login
                    avatarUrl
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
                      color
                    }
                  }
                }
                comments {
                  totalCount
                }
                milestone {
                  title
                }
                participants(first: 3) {
                  totalCount
                  nodes {
                    login
                    avatarUrl
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

  query FetchGoal($number: Int!) {
    gitHub {
      viewer {
        repository(name: "open-sauced-goals") {
          issue(number: $number) {
            id
            body
            title
            number
          }
        }
      }
    }
  }

  query FetchGoals() {
    gitHub {
      viewer {
        repository(name: "open-sauced-goals") {
          id
          data: object(expression: "HEAD:data.json") {
            id
            ... on GitHubBlob {
              id
              text
            }
          }
          stars: object(expression: "HEAD:stars.json") {
            id
            ... on GitHubBlob {
                id
                text
            }
          }
          issues(
            first: 50
            states: OPEN
            orderBy: { direction: DESC, field: CREATED_AT }
          ) {
            totalCount
            nodes {
              id
              full_name: title
              body
              number
              labels(first: 3) {
                nodes {
                  color
                  name
                  id
                }
              }
            }
          }
        }
      }
    }
  }

  query FetchOwnerQuery($owner: String!) {
    gitHub {
      user(login: $owner) {
        id
      }
    }
  }

  query FetchMemberStatusQuery() {
    gitHub {
      viewer {
        organization(login: "open-sauced") {
          viewerIsAMember
        }
      }
    }
  }

  query FetchRateLimitQuery() {
    gitHub {
      rateLimit {
        remaining
      }
    }
  }
  
  query FetchRepoCountQuery() {
    gitHub {
      search(query: "open-sauced-goals", type: REPOSITORY) {
        repositoryCount
      }
    }
  }

  mutation CreateOpenSaucedGoalsRepo($ownerId: ID!) {
    gitHub {
      cloneTemplateRepository(
        input: {
          repositoryId: "MDEwOlJlcG9zaXRvcnkyNjYzNDYyNDM="
          visibility: PUBLIC
          ownerId: $ownerId
          name: "open-sauced-goals"
        }
      ) {
        repository {
          id
          name
          nameWithOwner
          url
          issues(
            first: 10
            states: OPEN
            orderBy: { direction: DESC, field: CREATED_AT }
          ) {
            totalCount
            nodes {
              id
              title
              body
              number
              labels(first: 3) {
                nodes {
                  color
                  name
                  id
                }
              }
            }
          }

        }
      }
    }
  }

  mutation CreateGoal(
    $repoId: ID!
    $title: String!
    $notes: String
  ) {
    __typename
    gitHub {
      createIssue(
        input: {
          title: $title
          repositoryId: $repoId
          body: $notes
        }
      ) {
        issue {
          id
          title
        }
      }
    }
  }

  mutation UpdateGoal(
    $id: ID!
    $state: GitHubIssueState
    $title: String
    $notes: String
  ) {
    __typename
    gitHub {
      updateIssue(
        input: {
          id: $id
          state: $state
          title: $title
          body: $notes
        }
      ) {
        issue {
          id
          body
        }
      }
    }
  }

  query FetchUserForkCount(
    $repoName: String!
    $repoOwner: String!
  ) {
    gitHub {
      repository(name: $repoName, owner: $repoOwner) {
        forks(affiliations: OWNER) {
          totalCount
        }
      }
    }
  }

  mutation ForkRepository(
    $repoName: String!
    $repoOwner: String!
  ) {
    gitHub {
      createFork_oneGraph(
        input: { repoName: $repoName, repoOwner: $repoOwner }
      ) {
        clientMutationId
        repository {
          id
          url
        }
      }
    }
  }
`;

function fetchIssuesBeforeQuery(owner, repo, cursor) {
  return fetchOneGraph(operationsDoc, "IssuesBeforeQuery", {owner: owner, repo: repo, cursor: cursor});
}

function fetchIssuesAfterQuery(owner, repo, cursor) {
  return fetchOneGraph(operationsDoc, "IssuesAfterQuery", {owner: owner, repo: repo, cursor: cursor});
}

function fetchGoalQuery(issueNumber) {
  return fetchOneGraph(operationsDoc, "FetchGoal", {number: issueNumber});
}

function fetchGoalsQuery() {
  return fetchOneGraph(operationsDoc, "FetchGoals");
}

function fetchOwnerId(owner) {
  return fetchOneGraph(operationsDoc, "FetchOwnerQuery", {owner: owner});
}

function fetchMemberStatus() {
  return fetchOneGraph(operationsDoc, "FetchMemberStatusQuery");
}

function fetchRateLimit() {
  return fetchOneGraph(operationsDoc, "FetchRateLimitQuery");
}

function fetchRepoCount() {
  return fetchOneGraph(operationsDoc, "FetchRepoCountQuery");
}

function createOpenSaucedGoalsRepo(ownerId) {
  return fetchOneGraph(operationsDoc, "CreateOpenSaucedGoalsRepo", {ownerId: ownerId});
}

function createGoal(repoId, title, notes) {
  return fetchOneGraph(operationsDoc, "CreateGoal", {repoId: repoId, title: title, notes: notes});
}

function updateGoal(id, title, state, notes) {
  return fetchOneGraph(operationsDoc, "UpdateGoal", {
    id: id,
    state: state,
    title: title,
    notes: notes,
  });
}

function fetchUserForkCount(repoName, repoOwner) {
  return fetchOneGraph(operationsDoc, "FetchUserForkCount", {repoName, repoOwner});
}

function forkRepository(repoName, repoOwner) {
  return fetchOneGraph(operationsDoc, "ForkRepository", repoName, repoOwner);
}

const api = {
  fetchOwnerId,
  fetchRepositoryIssues: (owner, repo, cursor, previous = false) => {
    const issueFetcher = cursor && previous ? fetchIssuesBeforeQuery : fetchIssuesAfterQuery;

    return issueFetcher({owner, repo, cursor});
  },
  fetchGoalQuery,
  fetchGoalsQuery,
  fetchMemberStatus,
  fetchRateLimit,
  fetchRepoCount,
  createOpenSaucedGoalsRepo,
  createGoal,
  updateGoal,
  persistedRepoDataFetch,
  persistedForkFetch,
  persistedGoalFetch,
  persistedInteractionsFetch,
  persistedIssuesFetch,
  persistedRepositoryIssuesFetch: (owner, repo, cursor, previous = false) => {
    const issueFetcher = cursor && previous ? persistedIssuesBeforeFetch : persistedIssuesAfterFetch;

    return issueFetcher({owner, repo, cursor});
  },
  persistedDeploymentFetch,
  persistedIssuesByLabelFetch,
  persistedRepositoryIssuesByLabelFetch: (owner, repo, cursor, previous = false) => {
    const issueFetcher = cursor && previous ? persistedIssuesByLabelBeforeFetch : persistedIssuesByLabelAfterFetch;

    return issueFetcher({owner, repo, cursor});
  },
  persistedViewerStars,
  fetchUserForkCount,
  forkRepository,
};

export default api;
