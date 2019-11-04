import React from "react";
import {home, github, logout, issue} from "../icons";
import {Link} from "react-router-dom";
import {FloatLeft, FloatRight} from "../styles/Grid";
import {SimpleHeader} from "../styles/Header";

function Header({user, handleLogOut}) {
  return (
    <SimpleHeader>
      <FloatLeft>
        <Link to="/" className="home" alt="home">
          <span>
            <img src={home} />
          </span>
        </Link>
      </FloatLeft>

      <FloatRight>
        <a className="nav-link" href={`https://github.com/${user.login}`}>
          <span>Hi, {user.login}!</span>
        </a>
        <a className="nav-link" target="_blank" href="https://github.com/bdougie/open-sauced/issues/new">
          <span>
            <img src={issue} />
          </span>
        </a>
        <a className="nav-link" href="https://github.com/bdougie/open-sauced">
          <span>
            <img src={github} />
          </span>
        </a>
        <a className="logout" onClick={handleLogOut}>
          <span>
            <img src={logout} />
          </span>
        </a>
      </FloatRight>
    </SimpleHeader>
  );
}

export default Header;
