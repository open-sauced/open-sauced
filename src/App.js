import React from "react";
import NewRepo from "./containers/NewRepo";
import Repositories from "./containers/Repositories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import auth from "./hoc/AuthHOC";

function App({handleLogIn, handleLogOut, user}) {
  const guard = component => {
    return auth(component, user, handleLogIn);
  };

  return (
    <Router>
      {user && <Header user={user} handleLogOut={handleLogOut} />}
      <section>
        <Route exact path="/" component={guard(Repositories)} user={user} />
        <Route path="/repos" component={guard(Repositories)} user={user} />
        <Route path="/new" component={guard(NewRepo)} />
        <Route path="/callback" component={guard(Repositories)} />
      </section>
      <Footer />
    </Router>
  );
}

export default App;
