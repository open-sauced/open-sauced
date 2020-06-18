import React from "react";
import {Link} from "react-router-dom";
import {Container} from "../styles/ListItem";
import RepoListItem from "../components/RepoListItem";
import Card from "../components/Card";
import List from "../styles/List";
import {merge} from "lodash";

function ListGoals({goals, data}) {
  const goalsWithData = merge(goals.nodes, data);

  return (
    <Container>
      <Card fitted>
        <List>
          {goalsWithData &&
            goalsWithData.map(goal => (
              <li key={goal.id}>
                <Link
                  to={{
                    pathname: `/repos/${goal.full_name.replace(/\s+/g, "")}/${goal.number}`,
                  }}>
                  <RepoListItem goal={goal} stars={goal.stargazers_count} />
                </Link>
              </li>
            ))}
        </List>
      </Card>
    </Container>
  );
}

export default ListGoals;
