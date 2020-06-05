import React from "react";
import {Link} from "react-router-dom";
import {Container} from "../styles/ListItem";
import RepoListItem from "../components/RepoListItem";
import Card from "../components/Card";
import List from "../styles/List";
import {EmptyPlaceholder} from "../styles/EmptyPlaceholder";
import Octicon, {getIconByName} from "@primer/octicons-react";

function ListGoals({goals}) {
  return (
    <Container>
      <Card fitted>
        <List>
          {goals.totalCount > 0 ? (
            goals &&
            goals.nodes.map(goal => (
              <li key={goal.id}>
                <Link
                  to={{
                    pathname: `/repos/${goal.title.replace(/\s+/g, "")}/${goal.number}`,
                  }}>
                  <RepoListItem goal={goal} stars={328} contributors={18} />
                </Link>
              </li>
            ))
          ) : (
            <EmptyPlaceholder>
              <div style={{color: "grey"}}>
                <Octicon size="large" verticalAlign="middle" icon={getIconByName("rocket")} />
              </div>
              <div className="helper">
                No Goals created
              </div>
            </EmptyPlaceholder>
          )}
        </List>
      </Card>
    </Container>
  );
}

export default ListGoals;
