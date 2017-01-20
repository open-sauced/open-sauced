import React from "react";

const RepoCount = ({count}) => {
  return count &&
    <div className="App">
      <div>Currently {count} repos in database</div>
    </div>
};

export default RepoCount;
