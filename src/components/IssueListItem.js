import React from "react";
import {FloatRight, FloatLeft, FlexColumn, FlexHeader, FlexCenter} from "../styles/Grid";
import {chevronRight} from "../icons";

function IssueListItem({title, labels}) {
  return (
    <FlexHeader>
      <FloatLeft>
        <FlexCenter>
          <FlexColumn className="details">
            <p>{title}</p>
            <div>{labels.data.length > 0 && labels.data.map(label => <span>{label.node.name}</span>)}</div>
          </FlexColumn>
        </FlexCenter>
      </FloatLeft>
      <FloatRight>
        <FlexCenter>
          <img src={chevronRight} alt="right-chevron" />
        </FlexCenter>
      </FloatRight>
    </FlexHeader>
  );
}
export default IssueListItem;
