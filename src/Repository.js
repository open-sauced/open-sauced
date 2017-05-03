import React from 'react'
import Form from './NoteForm'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'


const Repository = ({ data, match }) => {
  const {allRepositories} = data
  const { id, name, description } = data.Repository || {}

  return (
    <div>
      {allRepositories ? allRepositories.map((repo) => (
        <li key={repo.name}>
          <Link to={`/repos/${repo.name}/${repo.id}`}>
            {repo.name}
          </Link>
        </li>
      )): <p></p>}
      {name && <h1>{name}</h1>}
      {description && <p>{description}</p>}
      <Form repoId={id} repoName={name} />
    </div>
  )
}

const RepoQuery = gql`query RepositoryQuery($id: ID!) {
  Repository(id: $id) {
    name
    url
    description
  }
}`

const RepositoryWithData = graphql(RepoQuery, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.match.params.id
    }
  })
})(Repository)

export default RepositoryWithData
