import React, {useMemo, useState} from "react";
import Dashboard from "../containers/Dashboard";
import Footer from "../components/Footer";
import DashboardFooter from "../components/DashboardFooter";
import Nav from "../components/Nav";
import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import {MarketingButton} from "../styles/Button";
import {Wrapper} from "../styles/Header";
import LocaleContext from "../Context";
import auth from "../hoc/AuthHOC";
import {getAppVersion} from "../lib/appVersion";
import {ohno} from "../images";

function NoMatch() {
  const history = useHistory();

  return (
    <Wrapper style={{textAlign: "center", margin: "auto", padding: 30}}>
      <img style={{width: "50%"}} alt="404" src={ohno} />
      <h2>Oh No! This page does not exist yet. Would you like to build it?</h2>
      <MarketingButton primary onClick={() => history.push("/")}>
        Back to safety
      </MarketingButton>
      <a target="_blank" href="https://github.com/open-sauced/open-sauced/issues/new/choose">
        <MarketingButton>Click here if yes</MarketingButton>
      </a>
    </Wrapper>
  );
}

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
      <Switch>
        <LocaleContext.Provider value={value}>
          <Nav
            handleLogIn={handleLogIn}
            handleLogOut={handleLogOut}
            isLoggedIn={isLoggedIn}
            user={user}
            isAdmin={isAdmin}
          />
          <Route exact path="/" component={guard(Dashboard)} />
          <Route path="/repos" component={guard(Dashboard)} />
          <Route path="/callback" component={guard(Dashboard)} />
          <Route component={NoMatch} />
          {!user && <Footer />}
          {user && <DashboardFooter />}
        </LocaleContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
