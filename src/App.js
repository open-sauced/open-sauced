import React from "react";
import NewRepo from "./NewRepo";
import Repositories from "./Repositories";
import Dropdown from "./Dropdown";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <header>
        <Link to="/" className="home" alt="home"><span className="icon-home" /></Link>
        <Link to="/new" className="nav-link" alt="Add A Repo"><span className="icon-plus" /></Link>
        <Dropdown />
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
