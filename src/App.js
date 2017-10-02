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

class App extends Component {
  state = {user: null};

  componentDidMount() {
    const user = localStorage.getItem("currentOpenSaucedUser");
    if (user) {
      this.setState({user: JSON.parse(user)});
    } else {
      if (netlifyIdentity && netlifyIdentity.currentUser()) {
        const {
           app_metadata, created_at, confirmed_at, email, id, user_metadata
        } = netlifyIdentity.currentUser();
        localStorage.setItem(
          "currentOpenSaucedUser",
          JSON.stringify({...app_metadata, created_at, confirmed_at, email, id, ...user_metadata})
        );
      }
    }
    netlifyIdentity.on("login", (user) => this.setState({user}));
    netlifyIdentity.on("logout", (user) => this.setState({user: null}, localStorage.removeItem("currentOpenSaucedUser")));
  }

  handleLogIn = () => {
    netlifyIdentity.open();
  }

  handleLogOut = () => {
    netlifyIdentity.logout();
  }

  render() {
    return (
      <Router>
        <div>{this.state.user ?
          <header>
            <Link to="/" className="home" alt="home"><span><img src={home} /></span></Link>
            <a onClick={this.handleLogOut}>Logout</a>
            <a className="nav-link" href="https://github.com/bdougie/open-sauced"><span><img src={github} /></span></a>
            <Dropdown />
            <Link to="/new" className="nav-link" alt="Add A Repo"><img src={plus} /></Link>
          </header> : <header><a onClick={this.handleLogIn}>Login</a></header>}
          <section>
            <Route exact path="/" component={Repositories}/>
            <Route path="/repos" component={Repositories}/>
            <Route path="/new" component={NewRepo}/>
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
