import React, {useState, useRef, useEffect} from "react";
import {logo} from "../logos";
import {FloatLeftMobileNav, FloatRight} from "../styles/Grid";
import {AppNav, HomeNav} from "../styles/Header";
import {SpaceBetween, Logo} from "../styles/Grid";
import ProfileAvatar from "../styles/ProfileAvatar";
import DropdownMenu from "./DropdownMenu";
import AdminStatsBar from "./AdminStatsBar";
import Hotkeys from "react-hot-keys";
import {useHistory, Link} from "react-router-dom";
import ThemeButtonGroup from "./ThemeButtonGroup";

function LeftSide() {
  return (
    <FloatLeftMobileNav>
      <Link to="/" style={{verticalAlign: "middle", display: "inline-block"}}>
        <Logo alt="open sauced" src={logo} />
      </Link>
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
        <ThemeButtonGroup />
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
