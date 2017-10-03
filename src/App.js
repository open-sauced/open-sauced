import React, {Component} from "react";
import NewRepo from "./components/NewRepo";
import Repositories from "./components/Repositories";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import {home, github, plus} from "./icons";
import netlifyIdentity from "netlify-identity-widget";
import auth from "./hoc/AuthHOC";
import {loginUser, logoutUser} from "./lib/identityActions";

class App extends Component {
  state = {user: null};

  componentDidMount() {
    const user = localStorage.getItem("currentOpenSaucedUser");

    if (user) {
      this.setState({user: JSON.parse(user)});
    } else {
      loginUser();
    }

    netlifyIdentity.on("login", (user) => this.setState({user}, loginUser()));
    netlifyIdentity.on("logout", (user) => this.setState({user: null}, logoutUser()));
  }

  handleLogIn = () => {
    netlifyIdentity.open();
  }

  handleLogOut = () => {
    netlifyIdentity.logout();
  }

  render() {
    const {user} = this.state;
    return (
      <Router>
        <div>{user ?
          <header>
            <Link to="/" className="home" alt="home"><span><img src={home} /></span></Link>
            <a onClick={this.handleLogOut}>Logout</a>
            <a className="nav-link" href="https://github.com/bdougie/open-sauced"><span><img src={github} /></span></a>
            <Dropdown />
            <Link to="/new" className="nav-link" alt="Add A Repo"><img src={plus} /></Link>
          </header> : <header><a onClick={this.handleLogIn}>Welcome to Open Sauced</a></header>}
          <section>
            <Route exact path="/" component={auth(Repositories)}/>
            <Route path="/repos" component={auth(Repositories)}/>
            <Route path="/new" component={auth(NewRepo)}/>
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
