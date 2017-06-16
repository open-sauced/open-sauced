import React from "react";
import NewRepo from "./components/NewRepo";
import Repositories from "./components/Repositories";
import Dropdown from "./components/Dropdown";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import {home, github, plus} from "./icons";

const App = () => (
  <Router>
    <div>
      <header>
        <Link to="/" className="home" alt="home"><span><img src={home} /></span></Link>
        <a className="nav-link" href="https://github.com/bdougie/open-sauced"><span><img src={github} /></span></a>
        <Dropdown />
        <Link to="/new" className="nav-link" alt="Add A Repo"><img src={plus} /></Link>
      </header>
      <section>
        <Route exact path="/" component={Repositories}/>
        <Route path="/repos" component={Repositories}/>
        <Route path="/new" component={NewRepo}/>
      </section>
      <footer>
        <a href="https://www.netlify.com">
          <img alt="netlify-tag" src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"/>
        </a>
      </footer>
    </div>
  </Router>
);

export default App;
