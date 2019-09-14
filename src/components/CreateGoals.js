import React, {Component} from "react";
import Button from "../styles/Button";

export class CreateGoals extends Component {
  render() {
    const {handleGoalCreation} = this.props;
    return (
      <div>
        <p>To get saucin' create a goals</p>
        <Button onClick={handleGoalCreation}>Create your goal workspace</Button>
      </div>
    );
  }
}

export default CreateGoals;
