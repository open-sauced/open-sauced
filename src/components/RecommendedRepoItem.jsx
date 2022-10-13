import React from "react";
import {FloatRight, FloatLeft, Flex, FlexHeader, FlexCenter} from "../styles/Grid";
import {plus} from "../icons";
import {truncate} from "../lib/truncate";
import Avatar from "../styles/Avatar";
import api from "../lib/apiGraphQL";

function RecommendedRepoItem({goal, goalsId, onGoalAdded, validateGoalToAdd}) {
  const _handleGoalCreation = async goal => {
    if(!validateGoalToAdd(goal)) {
      return;
    }

    api
      .createGoal(goalsId, goal, null)
      .then(response => {
        onGoalAdded(response.data.gitHub.createIssue.issue);
      })
      .catch(e => console.error(e));
  };

  return (
    <div>
      <FlexHeader>
        <FloatLeft>
          <a href={`https://github.com/${goal.full_name}`} rel="noreferrer" target="_blank">
            <FlexCenter>
              <Avatar
                small
                alt="avatar"
                src={`https://avatars.githubusercontent.com/${goal.full_name.split("/")[0].replace(/\s+/g, "")}`}
              />
              <Flex className="details">
                <p>{truncate(goal.full_name, 60)}</p>
              </Flex>
            </FlexCenter>
          </a>
        </FloatLeft>
        <FloatRight>
          <FlexCenter>
            <a onClick={() => _handleGoalCreation(goal.full_name)} href="#add-recommended-repo">
              <img alt="add recommended repo" src={plus} className="svg" />
            </a>
          </FlexCenter>
        </FloatRight>
      </FlexHeader>
    </div>
  );
}

export default RecommendedRepoItem;
