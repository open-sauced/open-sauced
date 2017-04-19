import React, {Component} from "react";
import Form from "./Form";
import Manager from "./Manager";
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Main extends Component {
  render() {
    const {allRepositories} = this.props.data;

    return allRepositories && allRepositories !== undefined ?
      <div className="Main">
        <div className="App-header">
          <h1>Open Sauced</h1>
          <ul>
            <li>Add a project</li>
            <li>List</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="content">
          <Manager data={allRepositories} />
        </div>
        <div className="content">
          <Form repoData={allRepositories} />
        </div>
      </div>
        : <div>...Loading</div>
  }
}
const RepoQuery = gql`
 query {
    allRepositories {
      name
      url
      stargazers
    }
  }
`

const MainWithData = graphql(RepoQuery)(Main)

export default MainWithData

