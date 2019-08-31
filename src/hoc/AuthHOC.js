import React from "react";
import Login from "../components/Login";

export default function requireAuthentication(Component, user, handleLogIn) {
  class AuthHOC extends React.Component {
    render() {
      return user ? <Component {...this.props} /> : <Login handleLogIn={handleLogIn} />;
    }
  }
  return AuthHOC;
}
