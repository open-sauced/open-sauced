import React from "react";
import {Link} from "react-router-dom";
import {MarketingButton} from "../styles/Button";
import {Wrapper, FoodElements, SaucePosition, PizzaPosition, TopHero, SubHero, TrustSection, QuoteSection, DetailsSection} from "../styles/Header";
import {sauceFull, pizza} from "../images";
import {logo1 as logo} from "../logos";
import {Flex, FlexColumn} from "../styles/Grid";

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
        <Wrapper>
          <ul>
            <li>
              <small>Trusted By</small>
            </li>
            <li>
              <img src={"https://www.pinclipart.com/picdir/big/256-2564394_code-chrysalis-graphql-meetup-clipart.png"} />
            </li>
            <li>
              <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png"} />
            </li>
            <li>
              <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Electron_Wordmark.svg/1280px-Electron_Wordmark.svg.png"} />
            </li>
            <li>
              <img src={"https://www.ably.io/assets/open-policy/open-software/golang-4d0dd72145040e2584ddb2e062f6b0a9a5ed15528c1634cec759f7a3e956c0a6.png"} />
            </li>
          </ul>
        </Wrapper>
      </TrustSection>
      <QuoteSection>
        <Wrapper>
          <Link to="/">
            <img style={{height: 50}} alt="open sauced" src={logo} />
          </Link>
          <Flex className="description">
            Open Sauced provides structure onboarding for new contributors to open source. This structure provides a way to track your next contributions by leveraging a unique dashboard built on top of the GitHub GraphQL API.
          </Flex>
          <Flex style={{marginTop: 100}}>
            <Flex className="quote">
              <img alt="open sauced" src={"https://github.com/yg.png"} />
              <span>
                <q>Dictum fusce ut placerat orci nulla pellentesque dignissim.</q>
                <Flex className="author">- bdougie</Flex>
              </span>
            </Flex>
            <Flex className="quote">
              <img alt="open sauced" src={"https://github.com/yg.png"} />
              <span>
                <q>Dictum fusce ut placerat orci nulla pellentesque dignissim.</q>
                <Flex className="author">- bdougie</Flex>
              </span>
            </Flex>
          </Flex>
        </Wrapper>
      </QuoteSection>
      <DetailsSection>
        <Wrapper>
          <Flex style={{justifyContent: "space-between"}}>
            <Flex className="detail">
              <img alt="open sauced" src={"https://github.com/bdougie.png"} />
              <FlexColumn className="copy">
                <h2>Dictum fusce ut placerat orci nulla pellentesque dignissim.</h2>
                <p>Dictum fusce ut placerat orci nulla pellentesque dignissim.</p>
              </FlexColumn>
            </Flex>
            <Flex className="detail">
              <img alt="open sauced" src={"https://github.com/bdougie.png"} />
              <FlexColumn className="copy">
                <h2>Dictum fusce ut placerat orci nulla pellentesque dignissim.</h2>
                <p>Dictum fusce ut placerat orci nulla pellentesque dignissim.</p>
              </FlexColumn>
            </Flex>
          </Flex>
          <Flex style={{justifyContent: "space-between"}}>
            <Flex className="detail">
              <img alt="open sauced" src={"https://github.com/bdougie.png"} />
              <FlexColumn className="copy">
                <h2>Dictum fusce ut placerat orci nulla pellentesque dignissim.</h2>
                <p>Dictum fusce ut placerat orci nulla pellentesque dignissim.</p>
              </FlexColumn>
            </Flex>
            <Flex className="detail">
              <img alt="open sauced" src={"https://github.com/bdougie.png"} />
              <FlexColumn className="copy">
                <h2>Dictum fusce ut placerat orci nulla pellentesque dignissim.</h2>
                <p>Dictum fusce ut placerat orci nulla pellentesque dignissim.</p>
              </FlexColumn>
            </Flex>
          </Flex>
          <Flex style={{justifyContent: "space-between"}}>
            <Flex className="detail">
              <img alt="open sauced" src={"https://github.com/bdougie.png"} />
              <FlexColumn className="copy">
                <h2>Dictum fusce ut placerat orci nulla pellentesque dignissim.</h2>
                <p>Dictum fusce ut placerat orci nulla pellentesque dignissim.</p>
              </FlexColumn>
            </Flex>
          </Flex>
        </Wrapper>
      </DetailsSection>
    </React.Fragment>
  );
}

export default Hero;
