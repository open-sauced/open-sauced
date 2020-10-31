import React, {useMemo, useState} from "react";
import Dashboard from "../containers/Dashboard";
import Footer from "../components/Footer";
import DashboardFooter from "../components/DashboardFooter";
import Nav from "../components/Nav";
import Repository from "../components/Repository";
import {BrowserRouter as Router, Route, Redirect, Switch, useHistory} from "react-router-dom";
import {MarketingButton} from "../styles/Button";
import {Wrapper} from "../styles/Header";
import {SpaceAround} from "../styles/Grid";
import {NotFound} from "../styles/NotFound";
import LocaleContext from "../Context";
import auth from "../hoc/AuthHOC";
import {ohno} from "../images";

function NoMatch() {
  const history = useHistory();

  return (
    <NotFound>
      <Wrapper>
        <SpaceAround>
          <img alt="404" src={ohno} />
        </SpaceAround>
        <MarketingButton primary onClick={() => history.push("/")}>
          Back to home
        </MarketingButton>
      </Wrapper>
    </NotFound>
  );
}

function App({handleLogIn, handleLogOut, user, isAdmin, isLoggedIn}) {
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
      <Nav
        handleLogIn={handleLogIn}
        handleLogOut={handleLogOut}
        isLoggedIn={isLoggedIn}
        user={user}
        isAdmin={isAdmin}
      />
      <LocaleContext.Provider value={value}>
        <Switch>
          <Route exact path="/" component={guard(Dashboard)} />
          <Route path="/repos/:repoOwner/:repoName/" component={guard(Repository)} />
          <Route path="/callback" component={guard(Dashboard)} />
          <Route exact path="/logout" render={() => (
            isLoggedIn ? (
              handleLogOut()
            ) : (
              <Redirect to="/" />
            )
          )}/>
          <Route component={NoMatch} />
        </Switch>
        {!user && <Footer />}
        {user && <DashboardFooter />}
      </LocaleContext.Provider>
    </Router>
  );
}

export default App;
