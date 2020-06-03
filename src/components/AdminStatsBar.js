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
          <span>🌵</span>{deployment.environment}
        </li>
        <li>
          <a href={`https://github.com/open-sauced/open-sauced/releases/tag/v${getAppVersion()}`} target="_blank">
            <span>📦</span>v{getAppVersion()}
          </a>
        </li>
        <li className="no-well">
          <a href={`https://github.com/facebook/react/releases/tag/v${React.version}`} target="_blank">
            <span>⚛️</span> <b>React</b> v{React.version}
          </a>
        </li>
      </ul>
    </div>
  );
}

function RightSide({timing, rateLimit, repoCount}) {
  return (
    <div>
      <ul>
        <li>
          <span>🕒</span>{humanizer(timing.renderTime)} <span className="helper">render</span>
        </li>
        <li>
          <span>🕒</span>{humanizer(timing.loadTime)} <span className="helper">load</span>
        </li>
        <li>
          <span>😍</span>Users: {repoCount}
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
  const [repoCount, setRepoCount] = useState("⌛");

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

  const getDeployment = () => {
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

  const getRepoCount = () => {
    api
      .fetchRepoCount()
      .then(res => {
        const repoCount = res.data.gitHub.search.repositoryCount;
        setRepoCount(repoCount);
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
    getDeployment();
    getRepoCount();

  }, []);

  return (
    <AdminNav>
      <LeftSide
        deployment={deployment}
      />
      <RightSide
        rateLimit={rateLimit}
        timing={timing}
        repoCount={repoCount}
      />
    </AdminNav>
  );
}

export default AdminStatsBar;
