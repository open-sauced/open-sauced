import React, {useState, useEffect} from "react";
import {AdminNav} from "../styles/Header";
import {getAppVersion} from "../lib/appVersion";
import humanizeDuration from "humanize-duration";
import api from "../lib/apiGraphQL";

const humanizer = humanizeDuration.humanizer({
  language: "shortEn",
  maxDecimalPoints: 2,
  spacer: "",
  languages: {
    shortEn: {
      y: () => "y",
      mo: () => "mo",
      w: () => "w",
      d: () => "d",
      h: () => "h",
      m: () => "m",
      s: () => "s",
      ms: () => "ms",
    }
  }
});

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

function RightSide({timing, rateLimit}) {
  return (
    <div>
      <ul>
        <li>
          {humanizer(timing.renderTime)} render
        </li>
        <li>
          {humanizer(timing.loadTime)} load
        </li>
        <li>
          Rate Limit: {rateLimit}
        </li>
      </ul>
    </div>
  );
}

function AdminStatsBar() {
  const [rateLimit, setRateLimit] = useState("⌛");
  const [timing, setTiming] = useState({});

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

  const getTiming = () => {
    const timingAPI = window.performance.timing;
    const loadTime = timingAPI.loadEventEnd - timingAPI.navigationStart;
    const renderTime = timingAPI.domComplete - timingAPI.domLoading;
    console.log(renderTime);
    setTiming({
      loadTime,
      renderTime
    });
  };

  useEffect(() => {
    getRateLimit();
    getTiming();
  }, []);

  return (
    <AdminNav>
      <LeftSide />
      <RightSide
        rateLimit={rateLimit}
        timing={timing}
      />
    </AdminNav>
  );
}

export default AdminStatsBar;
