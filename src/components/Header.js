import React from "react";
import {home, github, logout, issue} from "../icons";
import {FloatLeft, FloatRight} from "../styles/Grid";
import {SimpleHeader} from "../styles/Header";
import {Link} from "react-router-dom";

function Header({user, handleLogOut}) {
  return (
    <SimpleHeader>
      <FloatLeft>
        <Link to="/" className="home">
          <span>
            <img alt="home icon" src={home} />
          </span>
        </Link>
      </FloatLeft>

      <FloatRight>
        <a alt="user login name" className="nav-link" href={`https://github.com/${user.login}`}>
          <span title="login name">Hi, {user.login}!</span>
        </a>
        <a className="nav-link" target="_blank" href="https://github.com/bdougie/open-sauced/issues/new">
          <span>
            <img alt="issue icon" src={issue} />
          </span>
        </a>
        <a className="nav-link" href="https://github.com/bdougie/open-sauced">
          <span>
            <img alt="github logo" src={github} />
          </span>
        </a>
        <a className="logout" onClick={handleLogOut}>
          <span>
            <img alt="log out icon" src={logout} />
          </span>
        </a>
      </FloatRight>
    </SimpleHeader>
  );
}

export default Header;
