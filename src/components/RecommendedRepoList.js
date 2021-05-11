import React from "react";
import {FlexStart, FloatRight, FloatLeft, Flex, FlexHeader, FlexCenter} from "../styles/Grid";
import {StarIcon} from "@primer/octicons-react";
import {plus} from "../icons";
import {humanizeNumber} from "../lib/humanizeNumber";
import {truncate} from "../lib/truncate";
import Avatar from "../styles/Avatar";

function RecommendedRepoList({goal, stars}) {
  return (
    <FlexHeader>
      <FloatLeft>
        <FlexCenter>
          <Avatar small
            alt="avatar"
            src={`https://avatars.githubusercontent.com/${goal.full_name.split("/")[0].replace(/\s+/g, "")}`}
          />
          <Flex className="details">
            <p>{truncate(goal.full_name.replace(/\s+/g, ""), 60)}</p>
          </Flex>
        </FlexCenter>
      </FloatLeft>
      <FloatRight>
        <FlexCenter>
          <img alt="pointing right icon" src={plus} />
        </FlexCenter>
      </FloatRight>
    </FlexHeader>
  );
}

export default RecommendedRepoList;
