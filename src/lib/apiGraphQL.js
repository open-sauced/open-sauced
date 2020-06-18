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

  query RepoInteractionsQuery($owner: String!, $repo: String!) {
    gitHub {
      repository(name: $repo, owner: $owner) {
        issues(
          first: 10
          orderBy: { direction: DESC, field: CREATED_AT }
          filterBy: { states: OPEN, viewerSubscribed: true }
        ) {
          data: edges {
            node {
              id
              title
              url
              number
              labels(first: 3) {
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

        viewerHasStarred
        viewerSubscription
        viewerPermission
        viewerIsCollaborator_oneGraph
        viewerCanAdminister
        viewerCanSubscribe
        url
      }
    }
  }

  query RepoQuery($repo: String!, $owner: String!) {
    gitHub {
      repositoryOwner(login: $owner) {
        repository(name: $repo) {
          id
          name
          nameWithOwner
          url
          owner {
            login
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
          languages(first: 3) {
            totalCount
            nodes {
              name
              color
            }
          }
        }
      }
    }
  }

  query IssuesQuery($owner: String!, $repo: String!) {
    gitHub {
      repositoryOwner(login: $owner) {
        repository(name: $repo) {
          issues(first: 5, states: OPEN, orderBy: {field: CREATED_AT, direction: DESC}) {
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
          data: object(expression: "master:data.json") {
            id
            ... on GitHubBlob {
              id
              text
            }
          }
          issues(
            first: 10
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

  query FetchDeploymentStatusQuery() {
    gitHub {
      repository(owner: "open-sauced", name: "open-sauced") { 
        deployments(last: 1) {
          nodes {
            environment
          }
        }
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
`;

function fetchContributedRepoQuery() {
  return fetchOneGraph(operationsDoc, "ContributedRepoQuery");
}

function fetchRepoInteractions(owner, repo) {
  return fetchOneGraph(operationsDoc, "RepoInteractionsQuery", {owner: owner, repo: repo});
}

function fetchRepoQuery(owner, repo) {
  return fetchOneGraph(operationsDoc, "RepoQuery", {repo: repo, owner: owner});
}

function fetchIssuesQuery(owner, repo, cursor) {
  return fetchOneGraph(operationsDoc, "IssuesQuery", {owner: owner, repo: repo});
}

function fetchIssuesBeforeQuery(owner, repo, cursor) {
  return fetchOneGraph(operationsDoc, "IssuesBeforeQuery", {owner: owner, repo: repo, cursor: cursor});
}

function fetchIssuesAfterQuery(owner, repo, cursor) {
  return fetchOneGraph(operationsDoc, "IssuesAfterQuery", {owner: owner, repo: repo, cursor: cursor});
}

function fetchGoalsQuery() {
  return fetchOneGraph(operationsDoc, "FetchGoals");
}

function fetchGoalQuery(number) {
  return fetchOneGraph(operationsDoc, "FetchGoal", {number: number});
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

function fetchDeploymentStatus() {
  return fetchOneGraph(operationsDoc, "FetchDeploymentStatusQuery");
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

const api = {
  fetchRepositoryData: fetchRepoQuery,
  fetchContributedRepoQuery,
  fetchRepoInteractions,
  fetchIssuesQuery,
  fetchOwnerId,
  fetchRepositoryIssues: (owner, repo, cursor, previous = false) => {
    const issueFetcher = cursor && previous ? fetchIssuesBeforeQuery : fetchIssuesAfterQuery;

    return issueFetcher(owner, repo, cursor);
  },
  fetchGoalsQuery,
  fetchGoalQuery,
  fetchMemberStatus,
  fetchRateLimit,
  fetchDeploymentStatus,
  fetchRepoCount,
  createOpenSaucedGoalsRepo,
  createGoal,
  updateGoal,
};

export default api;
