import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import Config from "./config";
import {getUserFromJwt} from "./lib/identityActions";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";
import reportWebVitals from './reportWebVitals';
import OneGraphApolloClient from "onegraph-apollo-client";
import {ApolloProvider, InMemoryCache} from "@apollo/client";
import api from "./lib/apiGraphQL";
import {getAppVersion} from "./lib/appVersion";
import {validateToken} from "./lib/validateToken";
import { registerSW } from 'virtual:pwa-register';
import { initiatePostHog, capturePostHogAnalytics } from "./lib/analytics";

const apolloClient = new OneGraphApolloClient({
  oneGraphAuth: Config.auth,
  cache: new InMemoryCache()
});

function Index() {
  const [user, setUser] = useState(null);
  const [loggedInStatus, setLogin] = useState(JSON.parse(localStorage.getItem("isLoggedIn")) && validateToken(Config.auth));
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    !!!import.meta.env.DEV && initiatePostHog();

    registerSW({
      immediate: true,
      onNeedRefresh: () => {
        console.log('SW needs refresh');
      },
      onOfflineReady: () => {
        console.log('SW is ready to handle offline requests.');
      },
      onRegistered: () => {
        console.log('SW registered');
      },
      onRegisterError: (e) => {
        console.log('SW registration failed', e);
      }
    });

    console.log(`%c
 ██████╗ ██████╗ ███████╗███╗   ██╗    ███████╗ █████╗ ██╗   ██╗ ██████╗███████╗██████╗
██╔═══██╗██╔══██╗██╔════╝████╗  ██║    ██╔════╝██╔══██╗██║   ██║██╔════╝██╔════╝██╔══██╗
██║   ██║██████╔╝█████╗  ██╔██╗ ██║    ███████╗███████║██║   ██║██║     █████╗  ██║  ██║
██║   ██║██╔═══╝ ██╔══╝  ██║╚██╗██║    ╚════██║██╔══██║██║   ██║██║     ██╔══╝  ██║  ██║
╚██████╔╝██║     ███████╗██║ ╚████║    ███████║██║  ██║╚██████╔╝╚██████╗███████╗██████╔╝
 ╚═════╝ ╚═╝     ╚══════╝╚═╝  ╚═══╝    ╚══════╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝╚══════╝╚═════╝%c v${getAppVersion()}`,
    "color:#f6d82b",
    "color:green;font-weight:bold");
    const auth = Config.auth;
    auth.isLoggedIn("github").then(isLoggedIn => {
      if (isLoggedIn) {

        const user = getUserFromJwt(auth);
        setUser(user);
        api
          .fetchMemberStatus()
          .then(res => {
            const viewerIsAMember = res.data.gitHub.viewer.organization === null ? false : true;
            setIsAdmin(viewerIsAMember);
          })
          .catch(e => {
            console.log(e);
          });

        setLogin(isLoggedIn);
        localStorage.setItem("isLoggedIn", isLoggedIn);
        return user;
      } else {
        console.warn("User is not logged into GitHub");
      }
    });
  }, []);

  const _handleLogIn = () => {
    const auth = Config.auth;

    capturePostHogAnalytics('User Login', 'userLogin', 'true');

    auth
      .login("github")
      .then(() => {
        auth.isLoggedIn("github").then(isLoggedIn => {
          if (isLoggedIn) {
            // Pull the user-data we care about from the JWT and
            // store it in component local state for the rest of the
            // app
            const user = getUserFromJwt(auth);
            setUser(user);
            localStorage.setItem("isLoggedIn", isLoggedIn);
            setLogin(isLoggedIn);
          } else {
            console.warn("User did not grant auth for GitHub");
          }
        });
      })
      .catch(e => console.error("Problem logging in", e));
  };

  const _handleLogOut = () => {
    // Set the local react states so that rogue requests aren't made
    // after log out but before we re-render.
    setUser(null);
    setIsAdmin(false);
    setLogin(false);
    const auth = Config.auth;
    auth.logout("github").then(() => {
      // Remove the local onegraph-auth storage
      localStorage.removeItem("oneGraph:" + Config.appId);
      // Remove the local AdminStats bar status storage
      localStorage.removeItem("adminBar");
      // Remove the local logged in status storage
      localStorage.removeItem("isLoggedIn");
    });
  };

  return (
    <div>
      <ApolloProvider client={apolloClient}>
        <App
          user={user}
          isLoggedIn={loggedInStatus}
          isAdmin={isAdmin}
          userId={user && user.id}
          handleLogIn={() => _handleLogIn()}
          handleLogOut={() => _handleLogOut()}
        />
      </ApolloProvider>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById( "root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
