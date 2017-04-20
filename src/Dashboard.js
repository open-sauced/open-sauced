import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

const Dashboard = ({data, match}) => {
  const {allRepositories} = data
  return (
    <div>
      <h2>Open Sauced Dashboard</h2>
      <ul>
        {allRepositories ? allRepositories.map((repo) => (
          <li key={repo.name}>
            <Link to={`repos/${repo.name}`}>
              {repo.name}
            </Link>
          </li>
          )): <p>...Loading</p>}
      </ul>
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
const DashboardWithData = graphql(AllRepoQuery)(Dashboard)

export default DashboardWithData
