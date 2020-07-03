import React from "react";
import {FlexCenter} from "../styles/Grid";
import {IssueOpenedIcon, GitPullRequestIcon, RepoForkedIcon, StarIcon} from "@primer/octicons-react";

function DetailInfo({icon, text}) {
  return (
    <FlexCenter style={{width: "100%", flexWrap: "wrap"}}>
      <div style={{width: "30px", color: "grey"}}>
        {(() => {
          switch (icon) {
            case "IssueOpenedIcon":
              return <IssueOpenedIcon verticalAlign="middle" />;
            case "GitHubPullrequestIcon":
              return <GitPullRequestIcon verticalAlign="middle" />;
            case "RepoForkedIcon":
              return <RepoForkedIcon verticalAlign="middle" />;
            case "StarIcon":
              return <StarIcon verticalAlign="middle" />;
            default:
              return null;
          }
        })()}
      </div>
      <div style={{fontSize: "15px", color: "grey"}}>{text}</div>
    </FlexCenter>
  );
}
export default DetailInfo;
