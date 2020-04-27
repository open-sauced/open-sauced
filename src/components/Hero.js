import React from "react";
import {MarketingButton} from "../styles/Button";
import {Flex} from "../styles/Grid";
import {SaucePosition, PizzaPosition, TopHero, SubHero, TrustSection} from "../styles/Header";
import {sauce, pizza} from "../icons";

function Hero({handleLogIn}) {
  return (
    <React.Fragment>
      <TopHero>
        <div style={{paddingTop: 24}}>
          <h1>The path to your next</h1>
          <h2>Open Source</h2>
          <h1>contribution.</h1>
        </div>
        <Flex>
          <SaucePosition src={sauce} />
          <PizzaPosition src={pizza} />
        </Flex>
      </TopHero>
      <SubHero>
        <MarketingButton primary onClick={handleLogIn}>
          Login
        </MarketingButton>
        <MarketingButton onClick={handleLogIn}>Read The Story</MarketingButton>
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
