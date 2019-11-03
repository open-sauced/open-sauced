import React from "react";
import Button from "../styles/Button";
import {Link} from "react-router-dom";
import {Container} from "../styles/ListItem";
import RepoListItem from "../components/RepoListItem.js";
import Card from "../components/DumbCard.js";
import List from "../styles/List.js";

function ListGoals({goals, goalsId}) {
  return (
    <Container>
      <Card fitted>
        <List>
          {goals.nodes.map(goal => (
            <li key={goal.id}>
              <Link
                to={{
                  pathname: `/repos/${goal.title}/${goal.number}`,
                }}>
                <RepoListItem goal={goal} stars={328} contributors={18} />
              </Link>
            </li>
          ))}
        </List>
      </Card>
      <Link to="/new" className="nav-link" alt="Add A Repo">
        <Button primary>Create a new goal</Button>
      </Link>
    </Container>
  );
}

export default ListGoals;
