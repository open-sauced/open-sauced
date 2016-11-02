import axios from "axios";

// Get s new toke in Webpack
const auth = {Authorization: process.env.githubToken || "bearer 19f129803e9b8f90263be19f020d7a0e9b133fbd"}

const api = {
  query(name, repo) {
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
    `
  },

  fetchRepositoryData(name, repo) {
    return axios.post("https://api.github.com/graphql", {
      query: this.query(name, repo)
    }, {headers: auth})
  }
}

export default api;
