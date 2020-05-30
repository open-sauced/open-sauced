import React from "react";
import {AdminNav} from "../styles/Header";

function LeftSide() {
  return (
    <div>
      <ul>
        <li>
          Hello
        </li>
        <li>
          Hello
        </li>
        <li>
          Hello
        </li>
      </ul>
    </div>
  );
}

function RightSide() {
  return (
    <div>
      <ul>
        <li>
          Hello
        </li>
        <li>
          Hello
        </li>
        <li>
          Hello
        </li>
      </ul>
    </div>
  );
}

function AdminStatsBar() {
  return (
    <AdminNav>
      <LeftSide />
      <RightSide />
    </AdminNav>
  );
}

export default AdminStatsBar;
