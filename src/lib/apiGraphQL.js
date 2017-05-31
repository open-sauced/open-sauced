import axios from "axios";

const auth = {Authorization: `bearer ${process.env.githubToken}`};
const githubUrl = "https://api.github.com/graphql";
const api = {
  fetchRepositoryData(name, repo) {
    return axios.post(githubUrl, {
      query: repoQuery(name, repo)
    }, {headers: auth});
  },

  fetchRepositoryIssues(name, repo) {
    return axios.post(githubUrl, {
      query: issueQuery(name, repo)
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

function issueQuery(name, repo, cursor) {
  const fetch = `
    {
      repositoryOwner(login: "${name}") {
        repository(name: "${repo}") {
          issues(first: 5) {
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

  const fetchMore = `
    {
      repositoryOwner(login: "${name}") {
        repository(name: "${repo}") {
          issues(first: 5, after: "${cursor}") {
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

  return cursor ? fetchMore : fetch;
}

export default api;
