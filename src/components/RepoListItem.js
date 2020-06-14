import React from "react";
import {FlexStart, FloatRight, FloatLeft, FlexColumn, FlexHeader, FlexCenter} from "../styles/Grid";
import Octicon, {getIconByName} from "@primer/octicons-react";
import Avatar from "../styles/Avatar";
import {chevronRight} from "../icons";
import {humanizeNumber} from "../lib/humanizeNumber";

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
            <p>{goal.full_name.replace(/\s+/g, "")}</p>
            {stars && (
              <FlexStart style={{alignItems: "flex-start"}}>
                <div>
                  <Octicon alt="star" verticalAlign="middle" icon={getIconByName("star")} />
                </div>
                <p>{humanizeNumber(stars)}</p>
              </FlexStart>
            )}
          </FlexColumn>
        </FlexCenter>
      </FloatLeft>
      <FloatRight>
        <FlexCenter>
          <img alt="pointing right icon" src={chevronRight} />
        </FlexCenter>
      </FloatRight>
    </FlexHeader>
  );
}
export default RepoListItem;
