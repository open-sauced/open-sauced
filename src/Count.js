import React from "react";

const RepoCount = ({count}) => {
  return count > 0 &&
    <p className="greyed"><em>Currently {count} repos in database</em></p>
};

export default RepoCount;
