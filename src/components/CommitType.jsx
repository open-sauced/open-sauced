import React from "react";
import {GitPullRequestDraftIcon, GitPullRequestIcon, IssueOpenedIcon,
  IssueClosedIcon, GitPullRequestClosedIcon, GitMergeIcon} from "@primer/octicons-react";

function CommitType({status, isDraft, mergeable, merged}) {
  switch (status) { // Check the status variable for OPEN/CLOSED/MERGED ISSUES
    case "OPEN":
    {
      if (isDraft) { //check wether if its a draft
        return (
          <GitPullRequestDraftIcon className="gitGrey" />
        );
      }
      if (mergeable === "MERGEABLE") {//check if its a pull request
        return (
          <GitPullRequestIcon verticalAlign="middle" className="gitGreen" />
        );
      }
      return (
        <IssueOpenedIcon verticalAlign="middle" className="gitGreen"/>
      );
    }
    case "CLOSED": // check for closed PR or Closed issue
    {
      if (mergeable === "MERGEABLE" && merged === false) {
        return (
          <GitPullRequestClosedIcon verticalAlign="middle" className="gitRed"/>
        );
      }
      return (
        <IssueClosedIcon verticalAlign="middle" className="gitPurple" />
      );
    }
    case "MERGED":
      return (
        <GitMergeIcon verticalAlign="middle" className="gitPurple" />
      );
    default:
      return (
        ""
      );
  }
}
export default CommitType;
