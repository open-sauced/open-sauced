import React from "react";
import {Link} from "react-router-dom";
import {MarketingButton} from "../styles/Button";
import {Wrapper, PizzaPosition, TopHero, SubHero, TrustSection, QuoteSection, DetailsSection} from "../styles/Header";
import {gucci, graphql, gitTrends, remirror, sauceFull, bdougie, UseShoppingCart} from "../images";
import {logo} from "../logos";
import {archive, mortarBoard, watch, squirrel} from "../icons";
import {Flex, FlexColumn, GridColumns} from "../styles/Grid";
import {fontSize} from "../styles/variables";

function Hero({handleLogIn}) {
  return (
    <React.Fragment>
      <TopHero>
        <Wrapper>
          <div style={{paddingTop: 24}}>
            <h1>The path to your next</h1>
            <h2>Open Source</h2>
            <h1>contribution and more pizza.</h1>
          </div>
          <PizzaPosition alt="pizza" src={sauceFull} />
        </Wrapper>
      </TopHero>
      <SubHero>
        <Wrapper>
          <MarketingButton primary onClick={handleLogIn}>
            Login
          </MarketingButton>
          <a rel="noreferrer" target="_blank" href="https://discord.gg/U2peSNf23P">
            <MarketingButton>Join Discord</MarketingButton>
          </a>
        </Wrapper>
      </SubHero>
      <TrustSection>
        <Wrapper>
          <ul>
            <li>
              <small style={{fontSize: fontSize.small}}>Trusted By</small>
            </li>
            <li>
              <a rel="noreferrer" target="_blank" href="https://github.com/dayhaysoos/use-shopping-cart">
                <img alt="UseShoppingCart" src={UseShoppingCart} />
              </a>
            </li>
            <li>
              <a rel="noreferrer" target="_blank" href="https://github.com/remirror/remirror">
                <img alt="remirror" src={remirror} />
              </a>
            </li>
            <li>
              <a rel="noreferrer" target="_blank" href="https://github.com/GitTrends/GitTrends">
                <img alt="gitTrends" src={gitTrends} />
              </a>
            </li>
            <li>
              <a rel="noreferrer" target="_blank" href="https://github.com/graphql/">
                <img alt="graphql" src={graphql} />
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
            Open Sauced provides guidance for new contributors finding their next contribution. Our approach towards onboarding
            offers a way to track contributions through a GitHub powered dashboard.
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
          <GridColumns columns={2}>
            <Flex className="detail">
              <img alt="open sauced" className="svg" src={archive} />
              <FlexColumn className="copy">
                <h2>Contributor issue tracking and triaging</h2>
                <p>
                  Working on good-first-issues has never been easier. Create and track your contribution wishlist all
                  in one dashboard.
                </p>
              </FlexColumn>
            </Flex>
            <Flex className="detail">
              <img alt="open sauced" className="svg" src={mortarBoard} />
              <FlexColumn className="copy">
                <h2>Structured onboarding for new contributors</h2>
                <p>
                  Starting a new contribution is challenging when there is no guide. Easily find projects with
                  structured contributor onboarding.
                </p>
              </FlexColumn>
            </Flex>
            <Flex className="detail">
              <img alt="open sauced" className="svg" src={watch} />
              <FlexColumn className="copy">
                <h2>Scheduled reminders</h2>
                <p>Get notified when the contributions you are following change status or are closed.</p>
              </FlexColumn>
            </Flex>
            <Flex className="detail">
              <img alt="open sauced" className="svg" src={squirrel} />
              <FlexColumn className="copy">
                <h2>Find community and mentorship from approved projects</h2>
                <p>
                  No more guessing what issues are ups for grabs. Through mentorship and community you will be first
                  to know what issues are ups-for-grabs.
                </p>
              </FlexColumn>
            </Flex>
          </GridColumns>
        </Wrapper>
      </DetailsSection>
    </React.Fragment>
  );
}

export default Hero;
