import React from "react";
import {FloatRight, FloatLeft, FlexColumn, FlexHeader, FlexCenter} from "../styles/Grid";
import {chevronRight} from "../icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {IssueOpenedIcon, CommentIcon, MilestoneIcon} from "@primer/octicons-react";
import contrast from "contrast";

dayjs.extend(relativeTime);

function IssueListItem({title, labels, author, opened, type, participants, comments, milestone}) {
  const participantsDiffCount = 3;
  const participantsShowDiff = participants && participants.totalCount - participantsDiffCount;
  return (
    <FlexHeader>
      <FloatLeft>
        <FlexCenter>
          <span style={{marginRight: 10}}>
            <IssueOpenedIcon verticalAlign="middle" />
          </span>
          <FlexColumn className="details">
            <p>
              {title}
            </p>
            <div>
              {labels.data.length > 0 && labels.data.map(label => (
                <span
                  style={{backgroundColor: `#${label.node.color}`, color: `${contrast(label.node.color) === "light" ? "black" : "white"}`}}
                  key={label.node.id}>
                  {label.node.name}
                </span>
              ))}
            </div>
            <div>
              {type === "issues" && <small style={{fontSize: 12}}>opened {dayjs(opened).fromNow()} by {author}</small>}
              {type === "contributions" && <small style={{fontSize: 12}}>opened {dayjs(opened).fromNow()}</small>}
              <span className="issueHelper">
                <CommentIcon className="icon" size={13} verticalAlign="middle" />
                {comments && comments.totalCount}
              </span>
              {milestone && (
                <span className="issueHelper">
                  <MilestoneIcon className="icon" size={13} verticalAlign="middle" />
                  {milestone.title}
                </span>
              )}
              {participants && participants.nodes.map((user, key) => (
                <img className="participants" key={key} src={user.avatarUrl} title={user.login} />
              ))}
              <span className="issueHelper">
                {
                  participants &&
                  participants.totalCount > participantsDiffCount &&
                   `+${participantsShowDiff} participant${participantsShowDiff !== 1 ? "s" : ""}`
                }
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
