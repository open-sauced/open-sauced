import React from "react";
import {AdminNav} from "../styles/Header";

function LeftSide() {
  return (
    <div>
      <ul>
        <li>
          🚧 WIP
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
  // Left Side

  // Right Side
  const numRequests = () => {
    return window.performance.getEntriesByType("resource").length;
  };

  return (
    <AdminNav>
      <LeftSide />
      <RightSide numRequests={numRequests()} />
    </AdminNav>
  );
}

export default AdminStatsBar;
