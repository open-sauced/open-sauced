import React, {Component} from "react";
import NewRepo from "./containers/NewRepo";
import Repositories from "./containers/Repositories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import netlifyIdentity from "netlify-identity-widget";
import auth from "./hoc/AuthHOC";
import {loginUser, logoutUser} from "./lib/identityActions";
import {graphql, compose} from "react-apollo";
import {viewerQuery, createViewer} from "./queries";
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

    netlifyIdentity.on("login", (user) => this.setState({user}, loginUser()));
    netlifyIdentity.on("logout", (user) => this.setState({user: null}, this.logOutViewer()));
  }

  componentWillReceiveProps(nextProps) {
    // console.logNextProps;
    const {viewer} = nextProps.data;
    if (viewer) {
      this.saveViewerId(viewer.id);
    }
  // componentDidMount needs to create a view if one is not avaiable
  }

  saveViewerId = (id) => {
    cookie.save("openSaucedViewerId", id);
  }

  logOutViewer = () => {
    cookie.remove("openSaucedViewerId");
    logoutUser();
  }

  render() {
    const {user} = this.state;
    return (
      <Router>
        <div>
          <Header user={user} />
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

const currentUser = localStorage.getItem("currentOpenSaucedUser");
const queryOptions = {
  options: {
    variables: {
      id: cookie.load("openSaucedViewerId")
    }
  }
};
const mutationOptions = {
  options: {
    variables: {
      id: currentUser ? JSON.parse(currentUser)["id"] : "",
      email: currentUser ? JSON.parse(currentUser)["email"] : ""
    }
  }
};

const AppWithUserData = compose(
  graphql(viewerQuery, queryOptions),
  graphql(createViewer, mutationOptions)
)(App);

export default AppWithUserData;
