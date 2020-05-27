import React from "react";
import {FloatRight, FloatLeft, FlexColumn, FlexHeader, FlexCenter} from "../styles/Grid";
import {chevronRight} from "../icons";
import moment from "moment";

function IssueListItem({title, labels, author, opened}) {
  return (
    <FlexHeader>
      <FloatLeft>
        <FlexCenter>
          <FlexColumn className="details">
            <p>{title}</p>
            <div>
              {labels.data.length > 0 && labels.data.map(label => {
                <span
                  style={{backgroundColor: `#${label.node.color}`}}
                  key={label.node.id}>
                  {console.log(label)}
                  {label.node.name}
                </span>;
              })}
              <small style={{fontSize: 12}}>opened {moment(opened).fromNow()} by {author}</small>
            </div>
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
