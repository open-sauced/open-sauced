import React from "react";
import {sauce, pizza} from "../src/icons";
import {logo1 as logo} from "../src/logos";

export default {
  title: "LoginPage",
};

export const Hero = () => (
  <section style={{width: 500}}>
    <div className="Hero Component">
      <div style={{display: "flex", alignItems: "baseline", justifyContent: "space-between", fontSize: 8, backgroundColor: "#fff"}} className="navbar color-white">
        <ul style={{padding: 0, listStyle: "none", display: "inline-flex"}}>
          <li style={{textTransform: "uppercase", marginRight: 4}}>Blog</li>
          <li style={{textTransform: "uppercase", marginRight: 4}}>GitHub</li>
          <li style={{textTransform: "uppercase", marginRight: 4}}>Subscribe</li>
          <li style={{textTransform: "uppercase", marginRight: 4}}>Login</li>
        </ul>
        <img style={{height: 8}} src={logo} />
      </div>
      <div style={{height: 120, backgroundColor: "#faeace"}} className="slogan1 color-accent">
        slogan1{" "}
        <div style={{float: "right"}} className="Side-Image">
          <img style={{height: 220, position: "relative", top: 0, right: -146}} src={sauce} />
          <img style={{height: 165, position: "relative", top: -36, right: -42}} src={pizza} />
        </div>
      </div>
      <div style={{height: 70, backgroundColor: "#f6d809"}} className="slogan2 login color-yellow">
        slogan2{" "}
      </div>
      <div style={{height: 50}} className="trusting-bar color-white">
        trust us
      </div>
    </div>
  </section>
);
