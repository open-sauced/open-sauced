import React from "react";
import {CardPadding} from "../styles/Card";
import Skeleton from "react-loading-skeleton";

function IssuesLoader() {
  return (
    <CardPadding className="loading">
      {[...Array(5)].map((key) => (
        <span key={key}>
          <div>
            <Skeleton height={10} />
          </div>
          <div className="label">
            <Skeleton height={10} width={100} count={3} />
          </div>
          <div className="meta">
            <Skeleton height={3} width={100} />
            <Skeleton height={3} width={5} />
            <Skeleton height={3} width={20} />
            <Skeleton height={3} width={3} />
          </div>
        </span>
      ))}
    </CardPadding>
  );
}

export default IssuesLoader;
