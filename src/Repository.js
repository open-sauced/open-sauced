import React from 'react'
import Form from './NoteForm'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Repository = ({ data, match }) => {
  const {Repository} = data
  const { id, name, description, notes } = Repository || {}

  return (
    <div>
      {Repository ?
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      : <p>Loading...</p>}
      <Form notes={notes} repoId={id} repoName={name} />
    </div>
  )
}

const RepoQuery = gql`query RepositoryQuery($id: ID!) {
  Repository(id: $id) {
    id
    name
    url
    notes
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
