import React from "react";
import {logo1 as logo} from "../logos";
import {FloatLeftMobileNav, FloatRight} from "../styles/Grid";
import {SubtleLink} from "../styles/Typography";
import {AppNav, HomeNav} from "../styles/Header";
import {SpaceBetween} from "../styles/Grid";
import {Link} from "react-router-dom";
import ProfileAvatar from "../styles/ProfileAvatar";
import {useHistory} from "react-router-dom";

function LeftSide({user, handleLogIn, handleLogOut}) {
  const history = useHistory();
  const _logOutRedirect = () => {
    handleLogOut();
    history.push("/");
  };

  return (
    <FloatLeftMobileNav>
      <a style={{verticalAlign: "middle"}} to="/">
        <img alt="open sauced" src={logo} />
      </a>
      <ul>
        <li>
          <SubtleLink href="https://dev.to/t/opensauced">Blog</SubtleLink>
        </li>
        <li>
          <SubtleLink href="https://github.com/open-sauced/open-sauced">GitHub</SubtleLink>
        </li>
        <li>
          <SubtleLink href="https://discord.gg/gZMKK5q">Discord</SubtleLink>
        </li>
        {user && (
          <li>
            <SubtleLink
              className="nav-link"
              target="_blank"
              href="https://github.com/open-sauced/open-sauced/issues/new/choose">
              Issue
            </SubtleLink>
          </li>
        )}
        <li>
          {user ? (
            <div>
              <SubtleLink alt="log in" onClick={_logOutRedirect}>Logout</SubtleLink>
            </div>
          ) : (
            <div>
              <SubtleLink alt="log out" onClick={handleLogIn}>Login</SubtleLink>
            </div>
          )}
        </li>
      </ul>
    </FloatLeftMobileNav>
  );
}

function RightSide({user}) {
  return (
    <FloatRight>
      <SpaceBetween>
        {user && (
          <SubtleLink alt="user login name" className="nav-link" href={`https://github.com/${user.login}`}>
            <ProfileAvatar alt="avatar" src={`https://avatars.githubusercontent.com/u/${user.id}`} />
          </SubtleLink>
        )}
      </SpaceBetween>
    </FloatRight>
  );
}

function Header({user, handleLogOut, handleLogIn}) {
  const Nav = user ? AppNav : HomeNav;
  return (
    <Nav>
      <LeftSide handleLogOut={handleLogOut} handleLogIn={handleLogIn} user={user} />
      <RightSide user={user} />
    </Nav>
  );
}

export default Header;
