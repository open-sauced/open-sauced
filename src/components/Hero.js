import React from "react";
import {MarketingButton} from "../styles/Button";
import {Wrapper, FoodElements, SaucePosition, PizzaPosition, TopHero, SubHero, TrustSection, QuoteSection, DetailsSection} from "../styles/Header";
import {sauceFull, pizza} from "../images";

function Hero({handleLogIn}) {
  return (
    <React.Fragment>
      <TopHero>
        <Wrapper>
          <div style={{paddingTop: 24}}>
            <h1>The path to your next</h1>
            <h2>Open Source</h2>
            <h1>contribution.</h1>
          </div>
          <FoodElements>
            <SaucePosition alt="sauce" src={sauceFull} />
            <PizzaPosition alt="pizza" src={pizza} />
          </FoodElements>
        </Wrapper>
      </TopHero>
      <SubHero>
        <Wrapper>
          <MarketingButton primary onClick={handleLogIn}>
            Login
          </MarketingButton>
          <MarketingButton primary onClick={handleLogIn}>
            Signup
          </MarketingButton>
        </Wrapper>
      </SubHero>
      <TrustSection>
        <small>Trusted By</small>
        <ul>
          <li>GraphQL</li>
          <li>NextJS</li>
          <li>Electron</li>
          <li>Golang</li>
        </ul>
      </TrustSection>
      <QuoteSection>
        <h1>Quote Section</h1>
      </QuoteSection>
      <DetailsSection>
        <h1>Details Section</h1>
      </DetailsSection>
    </React.Fragment>
  );
}

export default Hero;
