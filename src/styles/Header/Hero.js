import styled from "styled-components";
import {colors, size} from "../variables";

const Hero = styled.section`
  padding-left: 70px;
  padding-top: 0;
  min-height: 15vh;
  width: 100%;
  overflow-y: hidden;

  h1 {
    font-size: 32px;
  }

  h2 {
    margin: 0;
    color: ${colors.saucyRed};
    text-decoration: underline;
    font-size: 40px;
  }

  small {
    color: ${colors.saucyRed};
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    display: inline-flex;
  }

  li {
    margin-right: ${size.micro};
  }
`;

const PizzaPosition = styled.img`
  height: 375px;
  position: absolute;
  right: -95px;
  top: 80px;
`;
const SaucePosition = styled.img`
  height: 475px;
  position: absolute;
  right: 0;
  top: 43;
`;

const TopHero = styled(Hero)`
  width: 100%;
  display: inline-flex;
  background-color: ${colors.accent};
`;

const SubHero = styled(Hero)`
  margin: 0;
  width: 100%;
  padding-bottom: 45px;
  padding-top: 32px;
  background-color: ${colors.cheesyYellow};
`;

const TrustSection = styled(Hero)`
  height: 5vh;
  background-color: white;
  width: 100%;
  display: inline-flex;
  align-items: baseline;
  min-height: 1vh;
`;

export {SubHero, TopHero, TrustSection, PizzaPosition, SaucePosition};
