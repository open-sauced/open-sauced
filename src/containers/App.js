import React, {useMemo, useState} from "react";
import Dashboard from "../containers/Dashboard";
import Footer from "../components/Footer";
import DashboardFooter from "../components/DashboardFooter";
import Nav from "../components/Nav";
import {BrowserRouter as Router, Route} from "react-router-dom";
import LocaleContext from "../Context";
import auth from "../hoc/AuthHOC";
import {getAppVersion} from "../lib/appVersion";

function App({handleLogIn, handleLogOut, user, isAdmin, isLoggedIn}) {
  console.log("version", getAppVersion());
  const [goalsId, setGoalsId] = useState({});

  const guard = component => {
    return auth(component, user, isLoggedIn, handleLogIn);
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
        <Nav handleLogIn={handleLogIn} handleLogOut={handleLogOut} isLoggedIn={isLoggedIn} user={user} isAdmin={isAdmin} />
        <Route exact path="/" component={guard(Dashboard)} />
        <Route path="/repos" component={guard(Dashboard)} />
        <Route path="/callback" component={guard(Dashboard)} />
        {!user && <Footer />}
        {user && <DashboardFooter />}
      </LocaleContext.Provider>
    </Router>
  );
}

export default App;
