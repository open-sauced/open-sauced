import React from "react";
import Button from "../styles/Button";
import {Link} from "react-router-dom";

function ListGoals({issues}) {
  return (
    <div>
      <ul>
        {issues &&
          issues.nodes.map(issue => (
            <li key={issue.name}>
              <Link to={`/repos/${issue.title}/${issue.id}`}>{issue.title}</Link>
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
