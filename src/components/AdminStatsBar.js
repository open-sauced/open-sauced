import React, {useState, useEffect} from "react";
import {AdminNav} from "../styles/Header";
import {getAppVersion} from "../lib/appVersion";

function LeftSide() {
  return (
    <div>
      <ul>
        <li>
          <a href={`https://github.com/open-sauced/open-sauced/releases/tag/v${getAppVersion()}`} target="_blank">
            📦 v{getAppVersion()}
          </a>
        </li>
        <li className="no-well">
          <a href={`https://github.com/facebook/react/releases/tag/v${React.version}`} target="_blank">
            ⚛️ <b>React</b> v{React.version}
          </a>
        </li>
      </ul>
    </div>
  );
}

function RightSide({numRequests}) {
  return (
    <div>
      <ul>
        <li>
          {numRequests} Requests
        </li>
      </ul>
    </div>
  );
}

function AdminStatsBar() {
  const [numRequests, setNumRequests] = useState(0);

  const getNumRequests = () => {
    setNumRequests(window.performance.getEntriesByType("resource").length);
  };

  useEffect(() => {
    getNumRequests();
  }, []);

  return (
    <AdminNav>
      <LeftSide />
      <RightSide numRequests={numRequests} />
    </AdminNav>
  );
}

export default AdminStatsBar;
