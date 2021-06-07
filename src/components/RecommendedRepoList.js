import React from "react";
import {FloatRight, FloatLeft, Flex, FlexHeader, FlexCenter} from "../styles/Grid";
import {plus} from "../icons";
import {truncate} from "../lib/truncate";
import Avatar from "../styles/Avatar";
import api from "../lib/apiGraphQL";

function RecommendedRepoList({goal, goalsId, onGoalAdded}) {
  const _handleGoalCreation = async goal => {
    api
      .createGoal(goalsId, goal, null)
      .then(response => {
        console.log(response);
        onGoalAdded(response.data.gitHub.createIssue.issue);
      })
      .catch(e => console.error(e));
  };

  return (
    <div>
      <FlexHeader>
        <FloatLeft>
          <FlexCenter>
            <Avatar
              small
              alt="avatar"
              src={`https://avatars.githubusercontent.com/${goal.nameWithOwner.split("/")[0].replace(/\s+/g, "")}`}
            />
            <Flex className="details">
              <p>{truncate(goal.nameWithOwner, 60)}</p>
            </Flex>
          </FlexCenter>
        </FloatLeft>
        <FloatRight>
          <FlexCenter>
            <a onClick={() => _handleGoalCreation(goal.nameWithOwner)} href="#">
              <img alt="add recommended repo" src={plus} className="svg" />
            </a>
          </FlexCenter>
        </FloatRight>
      </FlexHeader>
    </div>
  );
}

export default RecommendedRepoList;
