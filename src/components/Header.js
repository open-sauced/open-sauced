import React from "react";
import {issue} from "../icons";
import {logo1 as logo} from "../logos";
import {FloatLeft, FloatRight} from "../styles/Grid";
import {SubtleLink} from "../styles/Typography";
import {HomePageHeader as HomeNav} from "../styles/Header";

function Header({user, handleLogOut, handleLogIn}) {
  return (
    <HomeNav className="nav-link">
      <FloatLeft>
        <ul>
          <li>
            <SubtleLink href="https://dev.to/t/opensauced">Blog</SubtleLink>
          </li>
          <li>
            <SubtleLink href="https://github.com/bdougie/open-sauced">GitHub</SubtleLink>
          </li>
          <li>
            <SubtleLink href="#">Subscribe</SubtleLink>
          </li>
          <li>
            {user ? (
              <SubtleLink onClick={handleLogOut}>Logout</SubtleLink>
            ) : (
              <SubtleLink onClick={handleLogIn}>Login</SubtleLink>
            )}
          </li>
        </ul>
      </FloatLeft>

      <FloatRight>
        {user && (
          <a alt="user login name" className="nav-link" href={`https://github.com/${user.login}`}>
            <span title="login name">Hi, {user.login}!</span>
          </a>
        )}
        <a className="nav-link" target="_blank" href="https://github.com/bdougie/open-sauced/issues/new">
          <span>
            <img alt="issue icon" src={issue} />
          </span>
        </a>
        <img src={logo} />
      </FloatRight>
    </HomeNav>
  );
}

export default Header;
