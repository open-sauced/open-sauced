import React from "react";

const RepoCount = ({count}) => {
  return count > 0 &&
    <div className="App">
      <div>Currently {count} repos in database</div>
    </div>
};

export default RepoCount;
