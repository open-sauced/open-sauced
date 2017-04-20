import React from 'react'
import Repository from './Repository'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {
  Route,
  Link
} from 'react-router-dom'

const Repositories = ({ match, data }) => {
  const {allRepositories} = data
  return (
    <div>
      <h2>GitHub Reposoitories</h2>
      <ul>
        {allRepositories ? allRepositories.map((repo) => (
          <li key={repo.name}>
            <Link to={`${match.url}/${repo.name}/${repo.id}`}>
              {repo.name}
            </Link>
          </li>
          )): <p>...Loading</p>}
      </ul>

      <Route path={`${match.url}/:repoName/:id`} component={Repository}/>
      <Route exact path={match.url} render={() => (
        <h3>Select a repo to see details.</h3>
      )}/>
    </div>
  );
}

const AllRepoQuery = gql`
 query {
    allRepositories {
      id
      name
    }
  }
`
const RepositoriesWithData = graphql(AllRepoQuery)(Repositories)

export default RepositoriesWithData
