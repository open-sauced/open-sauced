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
        <SubtleLink className="menu-link" href={`https://github.com/open-sauced/open-sauced/releases/tag/v${getAppVersion()}`}>v{getAppVersion()}</SubtleLink>
      </li>
      <li>
        <SubtleLink className="menu-link" onClick={_logOutRedirect}>Logout</SubtleLink>
      </li>
    </DropdownMenuCard>
  );
}
export default DropdownMenu;
