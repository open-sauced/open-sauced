import React from "react";
import PrimaryLink from "../styles/Typography/PrimaryLink";

const Footer = () => (
  <footer>
    <small>
      Made with <PrimaryLink href="https://www.prisma.io/">Prisma</PrimaryLink> using{" "}
      <PrimaryLink href="https://feathericons.com/">Feather</PrimaryLink> icons and hosted on{" "}
      <PrimaryLink href="https://www.netlify.com/">Netlify</PrimaryLink>.
    </small>
  </footer>
);

export default Footer;
