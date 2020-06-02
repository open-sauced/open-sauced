import React, {useState} from "react";
import {logo1 as logo} from "../logos";
import {FloatLeftMobileNav, FloatRight} from "../styles/Grid";
import {SubtleLink} from "../styles/Typography";
import {AppNav, HomeNav} from "../styles/Header";
import {SpaceBetween} from "../styles/Grid";
import ProfileAvatar from "../styles/ProfileAvatar";
import AdminStatsBar from "./AdminStatsBar";
import Hotkeys from "react-hot-keys";
import {useHistory, Link} from "react-router-dom";

function LeftSide({user, handleLogIn, handleLogOut}) {
  const history = useHistory();
  const _logOutRedirect = () => {
    handleLogOut();
    history.push("/");
  };

  return (
    <FloatLeftMobileNav>
      <Link style={{verticalAlign: "middle"}} to="/">
        <img alt="open sauced" src={logo} />
      </Link>
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
            <ProfileAvatar alt="avatar" src={`https://github.com/${user.login}.png`} />
          </SubtleLink>
        )}
      </SpaceBetween>
    </FloatRight>
  );
}

function Header({user, handleLogOut, handleLogIn, isAdmin}) {
  const [adminBar, setAdminBar] = useState(localStorage.getItem("adminBar") === "true");
  const Nav = user ? AppNav : HomeNav;

  const onKeyUp = () => {
    localStorage.setItem("adminBar", !adminBar);
    setAdminBar(!adminBar);
  };

  return (
    <div>
      {isAdmin && (
        <Hotkeys
          keyName="`"
          onKeyUp={(e) => onKeyUp(e)}
        >
          {adminBar && <AdminStatsBar />}
        </Hotkeys>
      )}
      <Nav>
        <LeftSide handleLogOut={handleLogOut} handleLogIn={handleLogIn} user={user} />
        <RightSide user={user} />
      </Nav>
    </div>
  );
}

export default Header;
