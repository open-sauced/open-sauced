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
    <React.Fragment>
      <Wrapper>
        <img alt="404" src={ohno}/>
        <p>oh no! This page does not exist yet. Would you like to build it?</p>
        <MarketingButton primary onClick={() => history.push("/")}>
          Back to safety
        </MarketingButton>
        <a target="_blank" href="https://github.com/open-sauced/open-sauced/issues/new/choose">
          <MarketingButton>Click here if yes</MarketingButton>
        </a>
      </Wrapper>
    </React.Fragment>
  );
}

function App({handleLogIn, handleLogOut, user, isAdmin}) {
  console.log("version", getAppVersion());
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
        <Nav handleLogIn={handleLogIn} handleLogOut={handleLogOut} user={user} isAdmin={isAdmin} />
        <Route exact path="/" component={guard(Dashboard)} />
        <Route path="/repos" component={guard(Dashboard)} />
        <Route path="/callback" component={guard(Dashboard)} />
        {!user && <Footer />}
        {user && <DashboardFooter />}
      </LocaleContext.Provider>
      <Switch>
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
