import React from "react";
import {size} from "lodash";

const RepoCount = ({count}) => {
  return count &&
    <div className="App">
      <div>Currently {size(count)} repos in database</div>
    </div>
};

export default RepoCount;
