import React, {useState, useEffect} from "react";
import {AdminNav} from "../styles/Header";
import {getAppVersion} from "../lib/appVersion";
import api from "../lib/apiGraphQL";

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

function RightSide({rateLimit}) {
  return (
    <div>
      <ul>
        <li>
          Rate Limit: {rateLimit}
        </li>
      </ul>
    </div>
  );
}

function AdminStatsBar() {
  const [rateLimit, setRateLimit] = useState("⌛");

  const getRateLimit = () => {
    api
      .fetchRateLimit()
      .then(res => {
        setRateLimit(res.data.gitHub.rateLimit.remaining);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getRateLimit();
  }, []);

  return (
    <AdminNav>
      <LeftSide />
      <RightSide
        rateLimit={rateLimit}
      />
    </AdminNav>
  );
}

export default AdminStatsBar;
