import React from "react";
import Login from "../components/Login";

export default function requireAuthentication(Component) {
  class AuthHOC extends Component {
    render() {
      const user = localStorage.getItem("currentOpenSaucedUser");
      return user ? <Component {...this.props} /> : <Login />;
    }
  }
  return AuthHOC;
}
