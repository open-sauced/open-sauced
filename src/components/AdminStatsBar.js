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
        <li>
          🚧 WIP
        </li>
        <li>
          🚧 WIP
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
        <li>
          🚧 WIP
        </li>
        <li>
          🚧 WIP
        </li>
      </ul>
    </div>
  );
}

function AdminStatsBar() {
  const [numRequests, setNumRequests] = useState("🍕");

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
