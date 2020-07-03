import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Container} from "../styles/ListItem";
import RepoListItem from "../components/RepoListItem";
import Card from "../components/Card";
import List from "../styles/List";
import {merge} from "lodash";
import sortBy from "lodash/sortBy";

function ListGoals({goals, data}) {
  const [sortType, setSortType] = useState("full_name");
  const goalsWithData = merge(goals.nodes, data);

  console.log(goalsWithData);

  return (
    <Container>
      <select value={sortType} onChange={e => setSortType(e.currentTarget.value)}>
        <option value="wip">None</option>
        <option value="full_name">Name</option>
        <option value="stargazers_count">Most Stars</option>
        <option value="stargazers_count">Fewest Stars</option>
      </select>
      <Card fitted>
        <List>
          {goalsWithData &&
            sortBy(goalsWithData, sortType).map(goal => (
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
