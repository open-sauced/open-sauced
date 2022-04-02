import React from "react";
import PrimaryLink from "../styles/Typography/PrimaryLink";
import {fontSize} from "../styles/variables";

function Footer({date}) {
  return (
    <footer>
      <small style={{fontSize: fontSize.small}}>
        Made with <PrimaryLink href="https://www.onegraph.com/">OneGraph</PrimaryLink>. Hosted on{" "}
        <PrimaryLink href="https://www.netlify.com/">Netlify</PrimaryLink>. Built at {date}
      </small>
    </footer>
  );
}

export default Footer;
