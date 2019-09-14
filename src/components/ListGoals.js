import React, {Component} from "react";
import Button from "../styles/Button";
import {Link} from "react-router-dom";

export class ListGoals extends Component {
  render() {
    return (
      <div>
        <Link to="/new" className="nav-link" alt="Add A Repo">
          <Button>Create a new goal</Button>
        </Link>
      </div>
    );
  }
}

export default ListGoals;
