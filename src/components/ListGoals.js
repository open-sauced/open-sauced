import React from "react";
import Button from "../styles/Button";
import {Link} from "react-router-dom";

function ListGoals({goals}) {
  return (
    <div>
      <ul>
        {goals.nodes.map(goal => (
          <li key={goal.id}>
            <Link to={`/repos/${goal.title}/${goal.id}`}>{goal.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/new" className="nav-link" alt="Add A Repo">
        <Button>Create a new goal</Button>
      </Link>
    </div>
  );
}

export default ListGoals;
