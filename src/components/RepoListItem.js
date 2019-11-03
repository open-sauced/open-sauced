import React from "react";
import {Flex} from "@primer/components";
import Label from "../styles/Label";
import {FloatRight, FloatLeft, FlexColumn, FlexHeader, FlexCenter} from "../styles/Grid";
import Octicon, {getIconByName} from "@primer/octicons-react";
import Avatar from "../styles/Avatar";
import {chevronRight} from "../icons";

function RepoListItem({goal, stars}) {
  return (
    <FlexHeader>
      <FloatLeft>
        <FlexCenter>
          <Avatar src={`https://avatars.githubusercontent.com/${goal.title.split("/")[0]}`} />
          <FlexColumn className="details">
            <p>{goal.title}</p>
            {stars && (
              <Flex justifyContent="flex-start" alignItems="center">
                <Octicon verticalAlign="middle" icon={getIconByName("star")} />
                <p>{stars}</p>
              </Flex>
            )}
          </FlexColumn>
        </FlexCenter>
      </FloatLeft>
      <FloatRight>
        <FlexCenter>
          <Label>TBD</Label>
          <img src={chevronRight} />
        </FlexCenter>
      </FloatRight>
    </FlexHeader>
  );
}
export default RepoListItem;
