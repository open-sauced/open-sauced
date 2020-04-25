import React from "react";
import {MarketingButton} from "../src/styles/Button";
import {sauce, pizza} from "../src/icons";
import {logo1 as logo} from "../src/logos";

export default {
  title: "LoginPage",
};

export const Hero = () => (
  <section style={{width: 700}}>
    <div className="Hero Component">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          fontSize: 8,
          backgroundColor: "#fff",
        }}
        className="navbar color-white">
        <ul style={{listStyle: "none", display: "inline-flex"}}>
          <li style={{textTransform: "uppercase", marginRight: 4}}>Blog</li>
          <li style={{textTransform: "uppercase", marginRight: 4}}>GitHub</li>
          <li style={{textTransform: "uppercase", marginRight: 4}}>Subscribe</li>
          <li style={{textTransform: "uppercase", marginRight: 4}}>Login</li>
        </ul>
        <img style={{height: 8}} src={logo} />
      </div>
      <div style={{paddingLeft: 70, display: "inline-flex", height: 240, backgroundColor: "#faeace"}} className="slogan1 color-accent">
        <div style={{paddingTop: 24}}>
          <h1 style={{fontSize: 32}}>The Path To Your Next</h1>
          <h2 style={{margin: 0, color: "#d95c41", textDecoration: "underline", fontSize: 40}}>Open Source</h2>
        </div>
        <div style={{float: "right"}} className="Side-Image">
          <img style={{height: 475, position: "relative", top: 0, right: -130}} src={sauce} />
          <img style={{height: 365, position: "relative", top: -439, right: -191}} src={pizza} />
        </div>
      </div>
      <div
        style={{paddingLeft: 70, paddingBottom: 32, paddingTop: 4, backgroundColor: "#f6d809"}}
        className="slogan2 login color-yellow">
        <h1 style={{fontSize: 32}}>Contribution.</h1>
        <MarketingButton primary onClick={() => console.log("clicked")}>
          Login
        </MarketingButton>
      </div>
      <div style={{paddingLeft: 60, display: "inline-flex", alignItems: "baseline"}} className="trusting-bar color-white">
        <small style={{color: "#d95c41", textTransform: "uppercase"}}>Trusted By</small>
        <ul style={{listStyle: "none", display: "inline-flex"}}>
          <li style={{marginRight: 8}}>ONE</li>
          <li style={{marginRight: 8}}>TWO</li>
          <li style={{marginRight: 8}}>THREE</li>
          <li style={{marginRight: 8}}>FOUR</li>
        </ul>
      </div>
    </div>
  </section>
);
