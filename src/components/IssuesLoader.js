import React from "react";
import {CardPadding} from "../styles/Card";
import Loader from "../styles/Loader";
import Skeleton from "react-loading-skeleton";

function IssuesLoader() {
  return (
    <Loader>
      <CardPadding>
        {[...Array(5)].map((item, key) => (
          <span key={key}>
            <div>
              <Skeleton height={10} />
            </div>
            <div className="label">
              <Skeleton inline height={10} width={100} count={3} />
            </div>
            <div className="meta">
              <Skeleton inline height={3} width={100} />
              <Skeleton inline height={3} width={5} />
              <Skeleton inline height={3} width={20} />
              <Skeleton inline height={3} width={3} />
            </div>
          </span>
        ))}
      </CardPadding>
    </Loader>
  );
}

export default IssuesLoader;
