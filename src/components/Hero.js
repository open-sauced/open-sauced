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
import {sauceFull} from "../images";
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
            <SaucePosition alt="sauce" src={sauceFull} />
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
              <img
                alt="graphql"
                src={"https://www.pinclipart.com/picdir/big/256-2564394_code-chrysalis-graphql-meetup-clipart.png"}
              />
            </li>
            <li>
              <img
                alt="nextjs"
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png"
                }
              />
            </li>
            <li>
              <img
                alt="electron"
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Electron_Wordmark.svg/1280px-Electron_Wordmark.svg.png"
                }
              />
            </li>
            <li>
              <img
                alt="golang"
                src={
                  "https://www.ably.io/assets/open-policy/open-software/golang-4d0dd72145040e2584ddb2e062f6b0a9a5ed15528c1634cec759f7a3e956c0a6.png"
                }
              />
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
            Open Sauced provides structure onboarding for new contributors to open source. This structure provides a way
            to track your next contributions by leveraging a unique dashboard built on top of the GitHub GraphQL API.
          </Flex>
          <Flex style={{marginTop: 100}}>
            <Flex className="quote">
              <img
                alt="open sauced"
                src={
                  "https://s3-us-west-2.amazonaws.com/paradigm-media-library/music_artists/Gucci%20Mane%20800x800.jpg"
                }
              />
              <span>
                <q>If you don't got sauce, then you lost.</q>
                <Flex className="author">- Gucci Mane</Flex>
              </span>
            </Flex>
            <Flex className="quote">
              <img alt="open sauced" src={"https://github.com/bdougie.png"} />
              <span>
                <q>Getting traction in contributing to open-source is just loggin in and getting started.</q>
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
                    Starting a new contribution is challenging when it is hard to find the content. Find project with
                    structured contributing guidelines.
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
