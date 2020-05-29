import React from "react";
import PrimaryLink from "../styles/Typography/PrimaryLink";

function Footer() {
  return (
    <footer>
      <small>
        Made with <PrimaryLink href="https://www.onegraph.com/">OneGraph</PrimaryLink>. Hosted on{" "}
        <PrimaryLink href="https://www.netlify.com/">Netlify</PrimaryLink>.
      </small>
    </footer>
  );
}

export default Footer;
