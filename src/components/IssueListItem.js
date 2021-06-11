import React from "react";
import {FloatRight, FloatLeft, FlexColumn, FlexHeader, FlexCenter} from "../styles/Grid";
import {chevronRight} from "../icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {IssueOpenedIcon, CommentIcon, MilestoneIcon} from "@primer/octicons-react";
import contrast from "contrast";
import {fontSize, size} from "../styles/variables";

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
            <p style={{fontSize: fontSize.default}}>
              <b>{title}</b>
            </p>
            <div>
              {labels.data.length > 0 && labels.data.map(label => (
                <span
                  style={{
                    backgroundColor: `#${label.node.color}`,
                    color: `${contrast(label.node.color) === "light" ? "black" : "white"}`,
                    fontSize: fontSize.small,
                    padding: size.micro,
                  }}
                  key={label.node.id}>
                  {label.node.name}
                </span>
              ))}
            </div>
            <div>
              {type === "issues" && <small style={{fontSize: fontSize.small}}>opened {dayjs(opened).fromNow()} by {author}</small>}
              {type === "contributions" && <small style={{fontSize: fontSize.small}}>opened {dayjs(opened).fromNow()}</small>}
              <span className="issueHelper">
                <CommentIcon className="icon" size={13} verticalAlign="middle" />
                <small style={{fontSize: fontSize.small}}>{comments && comments.totalCount}</small>
              </span>
              {milestone && (
                <span className="issueHelper">
                  <MilestoneIcon className="icon" size={13} verticalAlign="middle" />
                  <small style={{fontSize: fontSize.small}}>{milestone.title}</small>
                </span>
              )}
              <div className="avatar-stack">
                {participants && participants.nodes.map((user, key) => (
                  <img className="avatar" key={key} src={user.avatarUrl} title={user.login} />
                ))}
                {
                  participants &&
                  participants.totalCount > participantsDiffCount &&
                   (<div className="others">+{participantsShowDiff}</div>)
                }
              </div>
            </div>
          </FlexColumn>
        </FlexCenter>
      </FloatLeft>
      <FloatRight>
        <FlexCenter>
          <img className="svg" alt="right-chevron" src={chevronRight} />
        </FlexCenter>
      </FloatRight>
    </FlexHeader>
  );
}

export default IssueListItem;
