import React, {useEffect, useMemo, useState} from "react";
import Dashboard from "../containers/Dashboard";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Repository from "../components/Repository";
import {BrowserRouter as Router, Route, Redirect, Switch, useHistory} from "react-router-dom";
import {MarketingButton} from "../styles/Button";
import {Wrapper} from "../styles/Header";
import {SpaceAround} from "../styles/Grid";
import {NotFound} from "../styles/NotFound";
import LocaleContext from "../Context";
import ThemeContext from "../ThemeContext";
import auth from "../hoc/AuthHOC";
import {ohno} from "../images";
import systemIsDark from "../lib/systemIsDark";

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

  const locale = useMemo(
    () => ({
      goalsId,
      setGoalsId,
    }),
    [goalsId],
  );
/*   const systemIsDark = () => {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }; */
  const applyTheme = () => {
    if (theme === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", theme);
    }
    const goDark = (theme === "dark" || (theme === "system" && systemIsDark()));
    if (goDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };
  useEffect(() => {
    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
        if (theme === "system") applyTheme();
      });
    }
  });
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  useEffect(applyTheme, [theme]);

  return (
    <Router>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Nav
          handleLogIn={handleLogIn}
          handleLogOut={handleLogOut}
          isLoggedIn={isLoggedIn}
          user={user}
          isAdmin={isAdmin}
        />
        <LocaleContext.Provider value={locale}>

          <Switch>
            <Route exact path="/" component={guard(Dashboard)} />
            <Route path="/repos/:repoOwner/:repoName" render={({match})=>{
              return <Repository user={user} match={match} />
            }}></Route>
            <Route path="/callback" component={guard(Dashboard)} />
            <Route exact path="/logout" render={() => {
              return (
                isLoggedIn ? (
                  handleLogOut()
                ) : (
                  <Redirect to="/" />
                )
              );
            }}/>
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
