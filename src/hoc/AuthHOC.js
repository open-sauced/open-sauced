import React from "react";
import Login from "../components/Login";

export default function requireAuthentication(Component, user, handleLogIn) {
  function AuthHOC(props) {
    return user ? <Component {...props} /> : <Login handleLogIn={handleLogIn} />;
  }
  return AuthHOC;
}
