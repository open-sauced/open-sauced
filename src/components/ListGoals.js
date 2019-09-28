import React from "react";
import Button from "../styles/Button";
import {Link} from "react-router-dom";
import {Avatar, Box, Label, Flex} from "@primer/components";

function ListGoals({goals, goalsId}) {
  return (
    <div>
      <ul>
        <Flex textAlign="center" alignItems="center">
          {goals.nodes.map(goal => (
            <li key={goal.id}>
              <Box p={4}>
                <Avatar size={128} src={`https://avatars.githubusercontent.com/${goal.title.split("/")[0]}`} />
                <Link
                  to={{
                    pathname: `/repos/${goal.title}`,
                    goalId: goal.id,
                    note: goal.body,
                  }}>
                  {goal.title}
                </Link>
                {goal.labels &&
                  goal.labels.nodes.map(label => (
                    <Label key={label.id} m={1} outline>
                      {label.name}
                    </Label>
                  ))}
              </Box>
            </li>
          ))}
        </Flex>
      </ul>
      <Link to="/new" className="nav-link" alt="Add A Repo">
        <Button>Create a new goal</Button>
      </Link>
    </div>
  );
}

export default ListGoals;
