import React from "react";
import {Link} from "react-router-dom";
import {Container} from "../styles/ListItem";
import RepoListItem from "../components/RepoListItem";
import Card from "../components/Card";
import List from "../styles/List";

function ListGoals({goals}) {
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
    </Container>
  );
}

export default ListGoals;
