import React from "react";
import {Link} from "react-router-dom";
import {Container} from "../styles/ListItem";
import RepoListItem from "../components/RepoListItem";
import Card from "../components/DumbCard";
import AddRepoForm from "../components/AddRepoForm";
import List from "../styles/List";

function ListGoals({goals, goalsId}) {
  return (
    <Container>
      <Card fitted>
        <AddRepoForm goalsId={goalsId} />
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
    </Container>
  );
}

export default ListGoals;
