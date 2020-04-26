import React from "react";
import {MarketingButton} from "../styles/Button";
import {Flex} from "../styles/Grid";
import {SaucePosition, PizzaPosition, TopHero, SubHero, TrustSection} from "../styles/Header";
import {sauce, pizza} from "../icons";

function Hero({handleLogIn}) {
  return (
    <React.Fragment>
      <TopHero
        style={{width: "100%", paddingLeft: 70, display: "inline-flex", height: 240, backgroundColor: "#faeace"}}
        className="slogan1 color-accent">
        <div style={{paddingTop: 24}}>
          <h1>The Path To Your Next</h1>
          <h2>Open Source</h2>
        </div>
        <Flex>
          <SaucePosition src={sauce} />
          <PizzaPosition src={pizza} />
        </Flex>
      </TopHero>
      <SubHero>
        <h1>Contribution.</h1>
        <MarketingButton primary onClick={handleLogIn}>
          Login
        </MarketingButton>
      </SubHero>
      <TrustSection>
        {/*
        <small>Trusted By</small>
        <ul>
          <li>ONE</li>
          <li>TWO</li>
          <li>THREE</li>
          <li>FOUR</li>
        </ul>
        */}
      </TrustSection>
    </React.Fragment>
  );
}

export default Hero;
