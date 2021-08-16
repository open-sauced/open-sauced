import React from "react";
import {SubtleLink} from "../styles/Typography";
import {DropdownMenuCard} from "../styles/Card";
import {getAppVersion} from "../lib/appVersion";

function DropdownMenu({forwardRef, user, _logOutRedirect}) {
  return (
    <DropdownMenuCard ref={forwardRef}>
      <li>
        <SubtleLink className="menu-link" href={`https://github.com/${user.login}`}>{user.login}</SubtleLink>
      </li>
      <li>
        <SubtleLink className="menu-link" onClick={_logOutRedirect}>Logout</SubtleLink>
      </li>
      <li>
        <span className="app-info">v{getAppVersion()}</span>
      </li>
    </DropdownMenuCard>
  );
}
export default DropdownMenu;
