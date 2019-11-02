import React from "react";
import DashboardFooter from "../styles/Footer";
import {sauced} from "../icons";

function Footer() {
  return (
    <footer>
      <DashboardFooter>
        <img src={sauced} />
      </DashboardFooter>
    </footer>
  );
}

export default Footer;

