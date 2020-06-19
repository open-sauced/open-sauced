import React from "react";
import {MarketingButton} from "../src/styles/Button";
import {HomeNav} from "../src/styles/Header";
import {SubtleLink} from "../src/styles/Typography";
import {sauce, pizza} from "../src/icons";
import {logo} from "../src/logos";

export default {
  title: "HomePage",
};

export const Hero = () => (
  <React.Fragment>
    <HomeNav className="nav-link">
      <ul>
        <li>
          <SubtleLink href="https://dev.to/t/opensauced">Blog</SubtleLink>
        </li>
        <li>
          <SubtleLink href="https://github.com/open-sauced/open-sauced">GitHub</SubtleLink>
        </li>
        <li>
          <SubtleLink href="#">Subscribe</SubtleLink>
        </li>
        <li>
          <SubtleLink href="#">Login</SubtleLink>
        </li>
      </ul>
      <img src={logo} />
    </HomeNav>
    <div
      style={{width: "100%", paddingLeft: 70, display: "inline-flex", height: 240, backgroundColor: "#faeace"}}
      className="slogan1 color-accent">
      <div style={{paddingTop: 24}}>
        <h1 style={{fontSize: 32}}>The Path To Your Next</h1>
        <h2 style={{margin: 0, color: "#d95c41", textDecoration: "underline", fontSize: 40}}>Open Source</h2>
      </div>
      <div style={{display: "flex"}} className="Side-Image">
        <img style={{height: 475, position: "absolute", right: 0}} src={sauce} />
        <img style={{height: 375, position: "absolute", top: 68, right: -95}} src={pizza} />
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
  </React.Fragment>
);
