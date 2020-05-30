import React, {useState, useEffect} from "react";
import {AdminNav} from "../styles/Header";
import {getAppVersion} from "../lib/appVersion";
import {Link} from "react-router-dom";

function LeftSide() {
  return (
    <div>
      <ul>
        <li>
          <Link to="Path">
            📦 v{getAppVersion()}
          </Link>
        </li>
        <li className="no-well">
          <a href="#">
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
