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
      <h1>GitHub Reposoitories</h1>
      <Route exact path={match.url} render={() => (
        <p>Select a repo to see details.</p>
      )}/>
      <ul>
        {allRepositories ? allRepositories.map((repo) => (
          <li key={repo.name}>
            <Link to={`${match.url}/${repo.name}/${repo.id}`}>
              {repo.name}
            </Link>
          </li>
          )): <p className="greyed">Loading...</p>}
      </ul>

      <Route path={`${match.url}/:repoName/:id`} component={Repository}/>
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
