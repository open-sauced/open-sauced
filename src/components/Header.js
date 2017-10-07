import React from "react";
import netlifyIdentity from "netlify-identity-widget";
import Dropdown from "./Dropdown";
import {home, github, plus} from "../icons";
import {Link} from "react-router-dom";

const handleLogIn = () => {
  netlifyIdentity.open();
};

const handleLogOut = () => {
  netlifyIdentity.logout();
};

const Header = ({user}) => {
  return user ? (
    <header>
      <Link to="/" className="home" alt="home">
        <span>
          <img src={home} />
        </span>
      </Link>
      <a onClick={handleLogOut}>Logout</a>
      <a className="nav-link" href="https://github.com/bdougie/open-sauced">
        <span>
          <img src={github} />
        </span>
      </a>
      <Dropdown />
      <Link to="/new" className="nav-link" alt="Add A Repo">
        <img src={plus} />
      </Link>
    </header>
  ) : (
    <header>
      <a onClick={handleLogIn}>Welcome to Open Sauced</a>
    </header>
  );
};

export default Header;
