import React from "react";
import FlexCenter from "../styles/Grid/FlexCenter";
import GreenLink from "../styles/Typography/GreenLink";

const Footer = () => (
  <footer>
    <FlexCenter>
      <small>
        Made with <GreenLink href="https://feathericons.com/">Feather</GreenLink> icons
        using <GreenLink href="https://www.graph.cool/">Graphcool</GreenLink>.
        Hosted on <GreenLink href="https://www.netlify.com/">Netlify</GreenLink>.
      </small>
    </FlexCenter>
  </footer>
);

export default Footer;

