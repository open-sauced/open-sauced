import React from "react";
import {FloatRight, FloatLeft, FlexColumn, FlexHeader, FlexCenter} from "../styles/Grid";
import {chevronRight} from "../icons";
import moment from "moment";
import Octicon, {getIconByName} from "@primer/octicons-react";

function IssueListItem({title, labels, author, opened, type}) {
  return (
    <FlexHeader>
      <FloatLeft>
        <FlexCenter>
          <FlexColumn className="details">
            <p>
              <span style={{margin: 0}}>
                <Octicon verticalAlign="middle" icon={getIconByName("issue-opened")} />
              </span>
              {title}
              {labels.data.length > 0 && labels.data.map(label => (
                <span
                  style={{backgroundColor: `#${label.node.color}`}}
                  key={label.node.id}>
                  {label.node.name}
                </span>
              ))}
            </p>
            <div>
              {type === "issues" && <small style={{fontSize: 12}}>opened {moment(opened).fromNow()} by {author}</small>}
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
