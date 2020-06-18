import React from "react";
import {FloatRight, FloatLeft, FlexColumn, FlexHeader, FlexCenter} from "../styles/Grid";
import {chevronRight} from "../icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Octicon, {getIconByName} from "@primer/octicons-react";

dayjs.extend(relativeTime);

function IssueListItem({title, labels, author, opened, type, participants, comments, milestone}) {
  return (
    <FlexHeader>
      <FloatLeft>
        <FlexCenter>
          <span style={{marginRight: 10}}>
            <Octicon verticalAlign="middle" icon={getIconByName("issue-opened")} />
          </span>
          <FlexColumn className="details">
            <p>
              {title}
            </p>
            <div>
              {labels.data.length > 0 && labels.data.map(label => (
                <span
                  style={{backgroundColor: `#${label.node.color}`}}
                  key={label.node.id}>
                  {label.node.name}
                </span>
              ))}
            </div>
            <div>
              {type === "issues" && <small style={{fontSize: 12}}>opened {dayjs(opened).fromNow()} by {author}</small>}
              {type === "contributions" && <small style={{fontSize: 12}}>opened {dayjs(opened).fromNow()}</small>}
              <span className="issueHelper">
                <Octicon className="icon" size={13} verticalAlign="middle" icon={getIconByName("comment")} />
                {comments && comments.totalCount}
              </span>
              {milestone && (
                <span className="issueHelper">
                  <Octicon className="icon" size={13} verticalAlign="middle" icon={getIconByName("milestone")} />
                  {milestone.title}
                </span>
              )}
              {participants && participants.nodes.map((user, key) => (
                <img className="participants" key={key} src={user.avatarUrl} title={user.login} />
              ))}
              <span className="issueHelper">
                {participants && participants.totalCount > 3 && `+${participants.totalCount - 3} Participants`}
              </span>
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
