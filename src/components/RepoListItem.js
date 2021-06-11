import React from "react";
import {FlexStart, FloatRight, FloatLeft, FlexColumn, FlexHeader, FlexCenter} from "../styles/Grid";
import {StarIcon} from "@primer/octicons-react";
import Avatar from "../styles/Avatar";
import {chevronRight} from "../icons";
import {humanizeNumber} from "../lib/humanizeNumber";
import {truncate} from "../lib/truncate";

function RepoListItem({goal, stars}) {
  return (
    <FlexHeader>
      <FloatLeft>
        <FlexCenter>
          <Avatar
            alt="avatar"
            src={`https://avatars.githubusercontent.com/${goal.full_name.split("/")[0].replace(/\s+/g, "")}`}
          />
          <FlexColumn className="details">
            <p>{truncate(goal.full_name.replace(/\s+/g, ""), 60)}</p>
            {stars >= 0 ? (
              <FlexStart style={{alignItems: "flex-end"}}>
                <div>
                  <StarIcon alt="star" verticalAlign="middle" />
                </div>
                <p>{humanizeNumber(stars)}</p>
              </FlexStart>
            ) : (
              <p><i>Sync in Progress</i></p>
            )}
          </FlexColumn>
        </FlexCenter>
      </FloatLeft>
      <FloatRight>
        <FlexCenter>
          <img alt="pointing right icon" src={chevronRight} className="svg" />
        </FlexCenter>
      </FloatRight>
    </FlexHeader>
  );
}

export default RepoListItem;
