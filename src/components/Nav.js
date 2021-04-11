import React, {useState} from "react";
import {logo} from "../logos";
import {FloatLeftMobileNav, FloatRight} from "../styles/Grid";
import {SubtleLink} from "../styles/Typography";
import {AppNav, HomeNav} from "../styles/Header";
import {SpaceBetween, Logo} from "../styles/Grid";
import ProfileAvatar from "../styles/ProfileAvatar";
import AdminStatsBar from "./AdminStatsBar";
import Hotkeys from "react-hot-keys";
import {useHistory, Link} from "react-router-dom";

function LeftSide({isLoggedIn, user, handleLogIn, handleLogOut}) {
  const history = useHistory();
  const _logOutRedirect = () => {
    handleLogOut();
    history.push("/");
  };

  return (
    <FloatLeftMobileNav>
      <Link to="/" style={{verticalAlign: "middle", display: "inline-block"}}>
        <Logo alt="open sauced" src={logo} />
      </Link>
      <ul>
        <li>
          <SubtleLink
            href="https://dev.to/opensauced"
            className="nav-link"
            target="_blank"
            rel="noreferrer">
            Blog
          </SubtleLink>
        </li>
        <li>
          <SubtleLink
            href="https://github.com/open-sauced/open-sauced"
            className="nav-link"
            target="_blank"
            rel="noreferrer">
            GitHub
          </SubtleLink>
        </li>
        <li>
          <SubtleLink
            className="nav-link"
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/U2peSNf23P">
            Discord
          </SubtleLink>
        </li>
        {isLoggedIn && (
          <li>
            <SubtleLink
              className="nav-link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/open-sauced/open-sauced/issues/new/choose">
              Issue
            </SubtleLink>
          </li>
        )}
        <li>
          {isLoggedIn ? (
            <div>
              <SubtleLink tabIndex={0} onClick={_logOutRedirect}>Logout</SubtleLink>
            </div>
          ) : (
            <div>
              <SubtleLink tabIndex={0} onClick={handleLogIn}>Login</SubtleLink>
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

function Header({user, handleLogOut, handleLogIn, isAdmin, isLoggedIn}) {
  const [adminBar, setAdminBar] = useState(localStorage.getItem("adminBar") === "true");
  const Nav = isLoggedIn ? AppNav : HomeNav;

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
        <LeftSide handleLogOut={handleLogOut} handleLogIn={handleLogIn} isLoggedIn={isLoggedIn} user={user} />
        <RightSide user={user} />
      </Nav>
    </div>
  );
}

export default Header;
