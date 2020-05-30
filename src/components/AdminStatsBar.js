import React, {useState, useEffect} from "react";
import {AdminNav} from "../styles/Header";
import {getAppVersion} from "../lib/appVersion";

function LeftSide() {
  return (
    <div>
      <ul>
        <li>
          📦 v{getAppVersion()}
        </li>
        <li className="no-well">
          ⚛️ React v{React.version}
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
