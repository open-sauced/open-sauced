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
      const data = response.data.gitHub.viewer;
      this.setState({data});
    });
  }

  _handleGoalRepoCreation() {
    api.createOpenSaucedGoalsRepo().then(response => {
      const data = response.data.gitHub.viewer;
      this.setState({data});
    });
  }

  render() {
    const {data} = this.state;
    // undefined after clicking create goals repo 
    // TDOD: add a loading check or subscription/pinger
    const {repository} = data;
    console.log(repository)
    return repository ? <ListGoals /> : <CreateGoals handleGoalCreation={() => this._handleGoalRepoCreation()} />;
  }
}

export default Goals;
