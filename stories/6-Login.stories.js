import React from "react";
import {sauce, pizza} from "../src/icons";

export default {
  title: "LoginPage",
};

export const Hero = () => (
  <section style={{width: 1920}}>
    <div style={{height: 900}}>
      <img src={sauce} />
      <img src={pizza} />
    </div>
    <div style={{backgroundColor: "#fff"}} className="navbar color-white">
      menu
    </div>
    <div style={{height: 250, backgroundColor: "#faeace"}} className="slogan1 color-accent">
      slogan1{" "}
    </div>
    <div style={{height: 140, backgroundColor: "#f6d809"}} className="slogan2 login color-yellow">
      slogan2{" "}
    </div>
    <div style={{height: 50}} className="trusting-bar color-white">
      trust us
    </div>
  </section>
);

