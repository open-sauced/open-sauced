import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const Repository = ({ data, match }) => {
  const { name, description } = data.Repository || {}

  return (
  <div>
    {name && <h3>{name}</h3>}
    {description && <p>{description}</p>}
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
