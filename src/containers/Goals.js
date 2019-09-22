/* eslint-disable */
// add state to globals

import React, {Component} from "react";
import CreateGoals from "../components/CreateGoals";
import ListGoals from "../components/ListGoals";
import api from "../lib/apiGraphQL";

export class Goals extends Component {
  state = {data: ""};

  componentDidMount() {
    api.fetchGoalsQuery().then(response => {
      console.log(response)
      const data = response.data.gitHub.viewer;
      this.setState({data});
    });
  }

  _handleGoalId(id) {
    localStorage.setItem("goalsId", id);
  }

  _handleGoalRepoCreation() {
    api.createOpenSaucedGoalsRepo().then(response => {
      const data = response.data.gitHub.viewer;
      this.setState({data});
    });
  }

  render() {
    const {data} = this.state;
    const {repository} = data;
    repository && console.log(repository)
    repository && this._handleGoalId(repository.id)

    return repository ? <ListGoals data={repository} /> : <CreateGoals handleGoalCreation={() => this._handleGoalRepoCreation()} />;
  }
}

export default Goals;
