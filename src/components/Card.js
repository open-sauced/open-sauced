import React from "react";
import {Avatar, Box, Flex, Label} from "@primer/components";
import Octicon, {getIconByName} from "@primer/octicons-react";
import {Link} from "react-router-dom";
import Container from "../styles/Card.js";

function Card({goal, stars, contributors}) {
  return (
    <Container>
      <Box p={4}>
        <Flex mb={4} alignItems="center">
          <Avatar size={32} mr={2} src={`https://avatars.githubusercontent.com/${goal.title.split("/")[0]}`} />
          <Link
            to={{
              pathname: `/repos/${goal.title}`,
              goalId: goal.id,
              note: goal.body,
            }}>
            {goal.title}
          </Link>
        </Flex>
        <p>{goal.description}</p>
        <Flex mb={2} justifyContent="flex-start" alignItems="center">
          {goal.labels &&
            goal.labels.nodes.map(label => (
              <Label key={label.id} m={1} outline>
                {label.name}
              </Label>
            ))}
          <span>
            <Octicon verticalAlign="middle" icon={getIconByName("star")} />
            {stars}
          </span>
          <span>
            <Octicon verticalAlign="middle" icon={getIconByName("octoface")} />
            {contributors}
          </span>
        </Flex>
      </Box>
    </Container>
  );
}
export default Card;
