import React from "react";
import {FlexCenter} from "../styles/Grid";
import {IssueOpenedIcon, GitPullRequestIcon, RepoForkedIcon, StarIcon, LawIcon} from "@primer/octicons-react";
import {fontSize} from "../styles/variables";

function DetailInfo({icon, text}) {
  return (
    <FlexCenter style={{width: "100%", flexWrap: "wrap"}}>
      <div style={{width: "30px"}}>
        {(() => {
          switch (icon) {
            case "IssueOpenedIcon":
              return <IssueOpenedIcon verticalAlign="middle" />;
            case "GitPullRequestIcon":
              return <GitPullRequestIcon verticalAlign="middle" />;
            case "RepoForkedIcon":
              return <RepoForkedIcon verticalAlign="middle" />;
            case "StarIcon":
              return <StarIcon verticalAlign="middle" />;
            case "LawIcon":
              return <LawIcon verticalAlign="middle" />;
            default:
              return null;
          }
        })()}
      </div>
      <div style={{fontSize: fontSize.default}}>{text}</div>
    </FlexCenter>
  );
}
export default DetailInfo;
