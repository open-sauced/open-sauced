import React from "react";
import Label from "../styles/Label";
import {FlexStart, FloatRight, FloatLeft, FlexColumn, FlexHeader, FlexCenter} from "../styles/Grid";
import Octicon, {getIconByName} from "@primer/octicons-react";
import Avatar from "../styles/Avatar";
import {chevronRight} from "../icons";
import {truncate} from "../lib/truncate";

function RepoListItem({goal, stars}) {
  return (
    <FlexHeader>
      <FloatLeft>
        <FlexCenter>
          <Avatar alt="avatar" src={`https://avatars.githubusercontent.com/${goal.title.split("/")[0].replace(/\s+/g, "")}`} />
          <FlexColumn className="details">
            <p>{truncate(goal.title.replace(/\s+/g, ""), 60)}</p>
            {stars && (
              <FlexStart>
                <div>
                  <Octicon alt="star" verticalAlign="middle" icon={getIconByName("star")} />
                </div>
                <p>{stars}</p>
              </FlexStart>
            )}
          </FlexColumn>
        </FlexCenter>
      </FloatLeft>
      <FloatRight>
        <FlexCenter>
          <Label>TBD</Label>
          <img alt="pointing right icon" src={chevronRight} />
        </FlexCenter>
      </FloatRight>
    </FlexHeader>
  );
}
export default RepoListItem;
