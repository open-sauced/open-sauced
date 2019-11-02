import React, {useMemo, useState} from "react";
import NewRepo from "./containers/NewRepo";
import Repositories from "./containers/Repositories";
import Footer from "./components/Footer";
import DashboardFooter from "./components/DashboardFooter";
import Header from "./components/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import LocaleContext from "./Context";
import auth from "./hoc/AuthHOC";

function App({handleLogIn, handleLogOut, user}) {
  const [goalsId, setGoalsId] = useState({});

  const guard = component => {
    return auth(component, user, handleLogIn);
  };

  const value = useMemo(
    () => ({
      goalsId,
      setGoalsId,
    }),
    [goalsId],
  );

  return (
    <Router>
      <LocaleContext.Provider value={value}>
        {user && <Header user={user} handleLogOut={handleLogOut} />}
        <section>
          <Route exact path="/" component={guard(Repositories)} user={user} />
          <Route path="/repos" component={guard(Repositories)} user={user} />
          <Route path="/new" component={guard(NewRepo)} />
          <Route path="/callback" component={guard(Repositories)} />
        </section>
        {!user && <Footer />}
        {user && <DashboardFooter />}
      </LocaleContext.Provider>
    </Router>
  );
}

export default App;
