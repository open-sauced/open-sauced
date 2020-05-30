import React from "react";
import {Link} from "react-router-dom";
import {MarketingButton} from "../styles/Button";
import {
  Wrapper,
  FoodElements,
  SaucePosition,
  TopHero,
  SubHero,
  TrustSection,
  QuoteSection,
  DetailsSection,
} from "../styles/Header";
import {gucci, go, graphql, electron, next, sauceFull, bdougie} from "../images";
import {logo1 as logo} from "../logos";
import {archive, mortarBoard, watch, squirrel} from "../icons";
import {Flex, FlexColumn, FloatLeft, FloatRight} from "../styles/Grid";

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
            <SaucePosition alt="pizza" src={sauceFull} />
          </FoodElements>
        </Wrapper>
      </TopHero>
      <SubHero>
        <Wrapper>
          <MarketingButton primary onClick={handleLogIn}>
            Login
          </MarketingButton>
          <a target="_blank" href="https://discord.gg/gZMKK5q">
            <MarketingButton>Join Discord</MarketingButton>
          </a>
        </Wrapper>
      </SubHero>
      <TrustSection>
        <Wrapper>
          <ul>
            <li>
              <small>Trusted By</small>
            </li>
            <li>
              <a target="_blank" href="https://github.com/graphql/">
                <img alt="graphql" src={graphql} />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/vercel/next.js/">
                <img alt="nextjs" src={next} />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/electron/">
                <img alt="electron" src={electron} />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/golang/">
                <img alt="golang" src={go} />
              </a>
            </li>
          </ul>
        </Wrapper>
      </TrustSection>
      <QuoteSection>
        <Wrapper>
          <Flex className="description">
            <Link to="/">
              <img style={{height: 50}} alt="open sauced" src={logo} />
            </Link>
            Open Sauced provides structure onboarding for new contributors to open source. This structure provides a way
            to track your next contributions by leveraging a unique dashboard built on top of the GitHub GraphQL API.
          </Flex>
          <Flex className="quotes">
            <Flex className="quote">
              <img alt="open sauced" src={gucci} />
              <span>
                <q>If you don't got sauce, then you lost.</q>
                <Flex className="author">- Gucci Mane</Flex>
              </span>
            </Flex>
            <Flex className="quote">
              <img alt="open sauced" src={bdougie} />
              <span>
                <q>Getting traction contributing to open-source is only one log in away.</q>
                <Flex className="author">- bdougie</Flex>
              </span>
            </Flex>
          </Flex>
        </Wrapper>
      </QuoteSection>
      <DetailsSection>
        <Wrapper>
          <Flex>
            <FloatLeft>
              <Flex className="detail">
                <img alt="open sauced" src={archive} />
                <FlexColumn className="copy">
                  <h2>Contributor issue tracking and triaging</h2>
                  <p>
                    Working on good first issues has never been easier. Create and track your wishlist all in one
                    dashboard.
                  </p>
                </FlexColumn>
              </Flex>
              <Flex className="detail">
                <img alt="open sauced" src={mortarBoard} />
                <FlexColumn className="copy">
                  <h2>Structured onboarding for new contributors</h2>
                  <p>
                    Starting a new contribution is challenging when it is hard to find the content. Easily find projects
                    with structured contributing guidelines.
                  </p>
                </FlexColumn>
              </Flex>
            </FloatLeft>
            <FloatRight>
              <Flex className="detail">
                <img alt="open sauced" src={watch} />
                <FlexColumn className="copy">
                  <h2>Scheduled reminders</h2>
                  <p>Get notified when the contributions you are following change status or are closed.</p>
                </FlexColumn>
              </Flex>
              <Flex className="detail">
                <img alt="open sauced" src={squirrel} />
                <FlexColumn className="copy">
                  <h2>Find community and mentorship from approved projects</h2>
                  <p>
                    No more guessing what issues are ups for grabs. Leverage the guidance from leaders in the project to
                    grab issues ready for work.
                  </p>
                </FlexColumn>
              </Flex>
            </FloatRight>
          </Flex>
        </Wrapper>
      </DetailsSection>
    </React.Fragment>
  );
}

export default Hero;
