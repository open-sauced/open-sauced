import axios from "axios";

const auth = {Authorization: ""}

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
