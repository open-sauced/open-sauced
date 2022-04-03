import React from "react";
import {SubtleLink} from "../styles/Typography";
import {DropdownMenuCard} from "../styles/Card";
import {getAppVersion} from "../lib/appVersion";

function DropdownMenu({forwardRef, user, _logOutRedirect}) {
  return (
    <DropdownMenuCard ref={forwardRef}>
      <ul>
        <li>
          <SubtleLink
            tabIndex={0}
            className="menu-link"
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.login}
          </SubtleLink>
        </li>
        <li>
          <SubtleLink
            tabIndex={0}
            className="menu-link"
            href={`https://github.com/open-sauced/open-sauced/releases/tag/v${getAppVersion()}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            v{getAppVersion()}
          </SubtleLink>
        </li>
        <li>
          <SubtleLink
            tabIndex={0}
            className="menu-link"
            href={`https://docs.opensauced.pizza/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </SubtleLink>
        </li>
        <li>
          <SubtleLink tabIndex={0} className="menu-link" onClick={_logOutRedirect}>Logout</SubtleLink>
        </li>
      </ul>
    </DropdownMenuCard>
  );
}
export default DropdownMenu;
