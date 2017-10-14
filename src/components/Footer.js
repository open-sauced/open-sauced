import React from "react";
import {FlexCenter} from "../styles/Grid";
import GreenLink from "../styles/Typography/GreenLink";

const Footer = () => (
  <footer>
    <FlexCenter>
      <small>
        Made with <GreenLink href="https://www.graph.cool/">Graphcool</GreenLink> using <GreenLink href="https://feathericons.com/">Feather</GreenLink> icons
        and hosted on <GreenLink href="https://www.netlify.com/">Netlify</GreenLink>.
      </small>
    </FlexCenter>
  </footer>
);

export default Footer;

