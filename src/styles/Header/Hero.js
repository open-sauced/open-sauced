import styled from "styled-components";
import {colors, size} from "../variables";
import MEDIA from "../mediaTemplates";

const Hero = styled.section`
  padding-left: 10rem;
  padding-top: 0;
  min-height: 15vh;
  margin: auto;
  overflow-y: hidden;

  ${MEDIA.TABLET`
    padding-left: 5rem;
  `};
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

const FoodElements = styled.div`
  display: flex;

  ${MEDIA.TABLET`
    display: none;
  `};
`;

const PizzaPosition = styled.img`
  height: 375px;
  position: absolute;
  right: -95px;
  top: 80px;

  ${MEDIA.PHONE`
    height: 75px;
  `};
`;
const SaucePosition = styled.img`
  height: 475px;
  position: absolute;
  right: 0;
  top: 43;

  ${MEDIA.PHONE`
    height: 175px;
  `};
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

export {FoodElements, SubHero, TopHero, TrustSection, PizzaPosition, SaucePosition};
