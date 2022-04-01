import React from "react";
import Hero from "../components/LoginHero";

export default function requireAuthentication(Component, user, isLoggedIn, handleLogIn) {
  function AuthHOC(props) {
    return isLoggedIn ? <Component user={user} {...props} /> : <Hero handleLogIn={handleLogIn} />;
  }
  return AuthHOC;
}
