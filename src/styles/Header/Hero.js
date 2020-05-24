import styled from "styled-components";
import {colors, size} from "../variables";
import MEDIA from "../mediaTemplates";

const Hero = styled.section`
  padding-left: 5rem;
  padding-right: 2rem;
  padding-top: 0;
  min-height: 15vh;
  margin: auto;
  overflow-y: hidden;

  ${MEDIA.TABLET`
    padding-left: 1rem;
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

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;

 ${MEDIA.TABLET`
    padding: 0;
  `};

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
  right: 5%;
  top: 80px;

  ${MEDIA.PHONE`
    height: 75px;
  `};
`;
const SaucePosition = styled.img`
  height: 450px;
  position: absolute;
  right: 4%;
  top: 6%;

  ${MEDIA.PHONE`
    height: 175px;
  `};
`;

const TopHero = styled(Hero)`
  background-color: ${colors.accent};
`;

const SubHero = styled(Hero)`
  padding-bottom: 45px;
  padding-top: 32px;
  background-color: ${colors.cheesyYellow};
`;

const TrustSection = styled(Hero)`
  background-color: white;
  width: 100%;
  padding-top: 10px;
  text-transform: uppercase;

  small {
    font-weight: bold;
  }

  li {
    font-weight: bold;
    font-size: ${size.small};
    margin-right: 100px;
    color: ${colors.lightGrey}
  }
`;

const QuoteSection = styled(Hero)`
  background-color: white;
  width: 100%;
  padding-top: 10px;

  span {
    font-weight: bold;
    font-size: 14px;
  }
  .quote-image {
    float: left;
    margin-right: 20px;
  }
  .description {
    width: 40%;
    margin-top: 20px;
  }
  .quote {
    font-size: 25px;
    margin-right: 20px;
    font-family: 'Margarine', 'Helvetica', arial;
  }
`;

const DetailsSection = styled(Hero)`
  background-color: white;
  width: 100%;
  padding-top: 10px;

  small {
    font-weight: bold;
  }

  li {
    font-weight: bold;
    font-size: ${size.small};
    margin-right: 100px;
    color: ${colors.lightGrey}
  }
`;

export {Wrapper, FoodElements, SubHero, TopHero, TrustSection, QuoteSection, DetailsSection, PizzaPosition, SaucePosition};
