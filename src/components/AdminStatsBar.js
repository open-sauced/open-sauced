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

function LeftSide({deployment}) {
  return (
    <div>
      <ul>
        <li>
          <a href={`https://github.com/open-sauced/open-sauced/tree/${deployment.environment}`} target="_blank">
            🌵  {deployment.environment}
          </a>
        </li>
        <li>
          <a href={`https://github.com/open-sauced/open-sauced/releases/tag/v${getAppVersion()}`} target="_blank">
            📦  v{getAppVersion()}
          </a>
        </li>
        <li className="no-well">
          <a href={`https://github.com/facebook/react/releases/tag/v${React.version}`} target="_blank">
            ⚛️  <b>React</b> v{React.version}
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
          🕒  {humanizer(timing.renderTime)} <span className="helper">render</span>
        </li>
        <li>
          🕒  {humanizer(timing.loadTime)} <span className="helper">load</span>
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
  const [deployment, setDeployment] = useState("⌛");

  const getRateLimit = () => {
    api
      .fetchRateLimit()
      .then(res => {
        const rateLimit = res.data.gitHub.rateLimit.remaining;
        if (rateLimit > 4000) {
          setRateLimit(`${rateLimit} 😎`);
        } else if (rateLimit  > 2000 && rateLimit < 4000) {
          setRateLimit(`${rateLimit} ⚠️`);
        } else if (rateLimit  > 0 && rateLimit < 2000) {
          setRateLimit(`${rateLimit} 🚫️`);
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  const getDeloyment = () => {
    api
      .fetchDeploymentStatus()
      .then(res => {
        const deployment = res.data.gitHub.repository.deployments.nodes[0];
        setDeployment(deployment);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const getTiming = () => {
    const timingAPI = window.performance.timing;
    const loadTime = timingAPI.loadEventEnd - timingAPI.navigationStart;
    const renderTime = timingAPI.domComplete - timingAPI.domLoading;
    setTiming({
      loadTime,
      renderTime
    });
  };

  useEffect(() => {
    getRateLimit();
    getTiming();
    getDeloyment();
  }, []);

  return (
    <AdminNav>
      <LeftSide
        deployment={deployment}
      />
      <RightSide
        rateLimit={rateLimit}
        timing={timing}
      />
    </AdminNav>
  );
}

export default AdminStatsBar;
