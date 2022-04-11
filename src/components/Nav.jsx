import React, {useState, useRef, useEffect} from "react";
import {FaGithubSquare} from "react-icons/fa";
import {logo} from "../logos";
import {FloatLeftMobileNav, FloatRight} from "../styles/Grid";
import {SubtleLink} from "../styles/Typography";
import {AppNav, HomeNav} from "../styles/Header";
import {SpaceBetween, Logo} from "../styles/Grid";
import ProfileAvatar from "../styles/ProfileAvatar";
import DropdownMenu from "./DropdownMenu";
import AdminStatsBar from "./AdminStatsBar";
import Hotkeys from "react-hot-keys";
import {useHistory, Link} from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import { HiOutlineLogin, HiOutlineLogout } from "react-icons/hi";

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
        {isLoggedIn && (
          <li>
            <SubtleLink
              className="nav-link"
              target="_blank"
              rel="noreferrer"
              tabIndex={0}
              href="https://github.com/open-sauced/open-sauced/issues/new/choose">
              <FaGithubSquare/> Report a bug
            </SubtleLink>
          </li>
        )}
        <li>
          <SubtleLink
            className="nav-link"
            onClick={isLoggedIn ? _logOutRedirect : handleLogIn}
            tabIndex={0}
            >
            {isLoggedIn ?
              <><HiOutlineLogout/> Logout</>
            :
              <><HiOutlineLogin/> Login</>
            }
          </SubtleLink>
        </li>
      </ul>
    </FloatLeftMobileNav>
  );
}

function RightSide({user, handleLogOut}) {
  const [drawer, setDrawerOpen] = useState(false);

  const history = useHistory();
  const _logOutRedirect = () => {
    handleLogOut();
    history.push("/");
  };

  const dropdownMenuRef = useRef(null);
  const ProfileAvatarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target)) {
      if (ProfileAvatarRef.current && !ProfileAvatarRef.current.contains(event.target)) {
        setDrawerOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      setDrawerOpen(false);
    };
  }, []);

  return (
    <FloatRight>
      <SpaceBetween>
        <ThemeSwitch />
        {user && (
          <div className="show-avatar">
            <ProfileAvatar alt="avatar" src={`https://github.com/${user.login}.png`} title={`${user.login}`}
              onClick={() => setDrawerOpen(!drawer)} ref={ProfileAvatarRef} />
            {drawer &&
            <DropdownMenu
              forwardRef={dropdownMenuRef}
              user={user}
              _logOutRedirect={_logOutRedirect}
            />
            }
          </div>
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
        <RightSide user={user} handleLogOut={handleLogOut} />
      </Nav>
    </div>
  );
}

export default Header;
