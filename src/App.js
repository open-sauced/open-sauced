import React, {Component} from "react";
import NewRepo from "./containers/NewRepo";
import Repositories from "./containers/Repositories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import netlifyIdentity from "netlify-identity-widget";
import auth from "./hoc/AuthHOC";
import {loginUser, logoutUser} from "./lib/identityActions";
import {graphql} from "react-apollo";
import {viewerQuery} from "./queries";
import cookie from "react-cookies";

export class App extends Component {
  state = {user: null};

  componentDidMount() {
    const user = localStorage.getItem("currentOpenSaucedUser");

    if (user) {
      this.setState({user: JSON.parse(user)});
    } else {
      loginUser();
    }

    netlifyIdentity.on("login", user => this.setState({user}, loginUser()));
    netlifyIdentity.on("logout", user => this.setState({user: null}, this.logOutViewer()));
  }

  componentWillReceiveProps(nextProps) {
    const user = localStorage.getItem("currentOpenSaucedUser");
    const {viewer} = nextProps.data;

    if (user && nextProps.data.loading !== this.props.data.loading) {
      if (viewer) {
        this.saveViewerId(viewer.id);
      }
    }
  }

  saveViewerId = id => {
    cookie.save("openSaucedViewerId", id);
  };

  logOutViewer = () => {
    cookie.remove("openSaucedViewerId");
    logoutUser();
  };

  render() {
    const {user} = this.state;
    return (
      <Router>
        <div>
          <Header user={user} />
          <section>
            <Route exact path="/" component={auth(Repositories)} />
            <Route path="/repos" component={auth(Repositories)} />
            <Route path="/new" component={auth(NewRepo)} />
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}

const currentUser = localStorage.getItem("currentOpenSaucedUser");
const queryOptions = {
  options: {
    variables: {
      id: currentUser ? JSON.parse(currentUser)["id"] : "",
    },
  },
};

const AppWithUserData = graphql(viewerQuery, queryOptions)(App);

export default AppWithUserData;
