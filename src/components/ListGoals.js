import React from "react";
import Button from "../styles/Button";
import {Link} from "react-router-dom";
import {Container} from "../styles/ListItem";
import RepoListItem from "../components/RepoListItem";
import Card from "../components/DumbCard";
import List from "../styles/List";

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
