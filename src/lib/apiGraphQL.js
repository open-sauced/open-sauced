import axios from "axios";

const auth = {Authorization: `bearer ${process.env.githubToken}`};
const githubUrl = "https://api.github.com/graphql";
const api = {
  fetchRepositoryData(name, repo) {
    return axios.post(githubUrl, {
      query: repoQuery(name, repo)
    }, {headers: auth});
  },

  fetchRepositoryIssues(name, repo, cursor, previous = false) {
    return axios.post(githubUrl, {
      query: issueQuery(name, repo, cursor, previous)
    }, {headers: auth});
  }
};


function repoQuery(name, repo) {
  return `
    {
      repositoryOwner(login: "${name}") {
        repository(name: "${repo}") {
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
  `;
}

function issueQuery(name, repo, cursor, previous) {
  const fetch = `
    {
      repositoryOwner(login: "${name}") {
        repository(name: "${repo}") {
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
  `;

  const fetchNext = `
    {
      repositoryOwner(login: "${name}") {
        repository(name: "${repo}") {
          issues(first: 5, states: OPEN, after: "${cursor}") {
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
  `;

  const fetchPrevious = `
    {
      repositoryOwner(login: "${name}") {
        repository(name: "${repo}") {
          issues(first: 5, states: OPEN, before: "${cursor}") {
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
  `;

  return cursor !== undefined ? (previous ? fetchPrevious : fetchNext) : fetch;
}

export default api;
