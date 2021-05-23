import React from "react";
import {FloatRight, FloatLeft, Flex, FlexHeader, FlexCenter} from "../styles/Grid";
import {plus} from "../icons";
import {truncate} from "../lib/truncate";
import Avatar from "../styles/Avatar";

function RecommendedRepoList({goal}) {
  return (
    <FlexHeader>
      <FloatLeft>
        <FlexCenter>
          <Avatar
            small
            alt="avatar"
            src={`https://avatars.githubusercontent.com/${goal.nameWithOwner.split("/")[0].replace(/\s+/g, "")}`}
          />
          <Flex className="details">
            <p>{truncate(goal.nameWithOwner.split(/\s+/g, ""), 60)}</p>
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
