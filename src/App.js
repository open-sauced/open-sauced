// replace with hooks and new React path
import React, {Component} from "react";
import NewRepo from "./containers/NewRepo";
import Repositories from "./containers/Repositories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import auth from "./hoc/AuthHOC";

export class App extends Component {
  render() {
    const {handleLogIn, handleLogOut, user} = this.props;
    const guard = component => {
      return auth(component, user, handleLogIn);
    };

    return (
      <Router>
        <div>
          {user && <Header user={user} handleLogOut={handleLogOut} />}
          <section>
            <Route exact path="/" component={guard(Repositories)} />
            <Route path="/repos" component={guard(Repositories)} />
            <Route path="/callback" component={guard(Repositories)} />
            <Route path="/new" component={guard(NewRepo)} />
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
