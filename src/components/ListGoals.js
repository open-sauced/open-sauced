import React from "react";
import Button from "../styles/Button";
import {Link} from "react-router-dom";
import {Container} from "../styles/ListItem";
import Card from "./Card";

function ListGoals({goals, goalsId}) {
  return (
    <Container>
      <ul>
        {goals.nodes.map(goal => (
          <Card key={goal.id} goal={goal} stars={328} contributors={18} />
        ))}
      </ul>
      <Link to="/new" className="nav-link" alt="Add A Repo">
        <Button>Create a new goal</Button>
      </Link>
    </Container>
  );
}

export default ListGoals;
