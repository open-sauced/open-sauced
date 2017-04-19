import React from 'react'
import Form from './Form'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = ({data, match}) => {
  const {allRepositories} = data
  return (
    <div>
      <h2>Home</h2>
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

const NewRepo = ({allRepositories}) => {
  return (
    <div>
      <Form repoData={allRepositories ? allRepositories : []} />
    </div>
  );
}

const Repository = ({ data, match }) => {
  const {url, name, description} = data.Repository || {}

  return (
  <div>
    {name && <h3>{name}</h3>}
    {description && <p>{description}</p>}
  </div>
  )
}

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

      <Route path={`${match.url}/:repoName/:id`} component={RepositoryWithData}/>
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

const RepoQuery = gql`query RepositoryQuery($id: ID!) {
  Repository(id: $id) {
    name
    url
    description
  }
}`

const HomeWithData = graphql(AllRepoQuery)(Home)
const RepositoriesWithData = graphql(AllRepoQuery)(Repositories)
const RepositoryWithData = graphql(RepoQuery, {
  options: (ownProps) => ({
    variables: {
      id: ownProps.match.params.id
    }
  })
})(Repository)

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/new">Add A Repo</Link></li>
        <li><Link to="/repos">GitHub Repositories</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={HomeWithData}/>
      <Route path="/new" component={NewRepo}/>
      <Route path="/repos" component={RepositoriesWithData}/>
    </div>
  </Router>
)


const AppWithData = graphql(AllRepoQuery)(App)

export default AppWithData
