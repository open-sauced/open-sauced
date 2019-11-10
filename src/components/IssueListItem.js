import React from "react";
import {FloatRight, FloatLeft, FlexColumn, FlexHeader, FlexCenter} from "../styles/Grid";
import {chevronRight} from "../icons";

function IssueListItem({issue, label}) {
  return (
    <FlexHeader>
      <FloatLeft>
        <FlexCenter>
          <FlexColumn className="details">
            <p>{issue}</p>
            <div>
              <span>{label}</span>  <span>v2.0</span>
            </div>
          </FlexColumn>
        </FlexCenter>
      </FloatLeft>
      <FloatRight>
        <FlexCenter>
          <img src={chevronRight} />
        </FlexCenter>
      </FloatRight>
    </FlexHeader>
  );
}
export default IssueListItem;
