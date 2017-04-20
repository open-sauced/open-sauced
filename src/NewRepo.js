import React from 'react'
import Form from './NewRepoForm'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const NewRepo = ({data}) => {
  const {allRepositories} = data
  return (
    <div>
      <Form count={allRepositories ? allRepositories.length : 0} />
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

const NewRepoWithData = graphql(AllRepoQuery)(NewRepo)

export default NewRepoWithData
