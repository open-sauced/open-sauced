import styled from "styled-components";
import {colors, size} from "../variables";
import MEDIA from "../mediaTemplates";

const Hero = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 36px;
  margin: auto;
  overflow-y: hidden;

  ${MEDIA.TABLET`
    padding: 1rem;
  `};
  h1 {
    font-size: 32px;
  }

  h2 {
    margin: 0;
    color: ${colors.saucyRed};
    text-decoration: underline;
    font-size: ${size.medium};
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
  font-family: "Arvo", serif;

  ${MEDIA.TABLET`
    padding: 0;
  `};
`;

const PizzaPosition = styled.img`
  height: 29rem;
  position: absolute;
  right: 2%;
  top: 1%;
  ${MEDIA.TABLET`
    display: none;
  `};

  ${MEDIA.MIN_TABLET`
    right: 8%;
    top: 1%;
  `};

  ${MEDIA.DESKTOP`
    height: 22rem;
    right: 3%;
    top: 9%;
  `};
`;

const TopHero = styled(Hero)`
  background-color: ${colors.accent};
`;

const SubHero = styled(Hero)`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
  padding-bottom: 45px;
  padding-top: 32px;
  background-color: ${colors.cheesyYellow};
  ${MEDIA.PHONE`
    text-align: center;
  `};
`;

const TrustSection = styled(Hero)`
  background-color: white;
  padding-top: 10px;
  text-transform: uppercase;
  ${MEDIA.TABLET`
    margin: auto;
    text-align: center;
  `};

  small {
    font-weight: bold;
  }

  ul {
    display: inline-flex;
    ${MEDIA.TABLET`
      width: 80%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-content: space-around;
    `};
  }

  li {
    margin-right: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    ${MEDIA.TABLET`
      margin: auto;
      margin-right: 0;
      margin-top: 20px;
    `};
  }

  img {
    height: ${size.medium};
  }
`;

const QuoteSection = styled(Hero)`
  background-color: white;
  padding-top: 10px;

  .quote {
    width: 90%;
    margin-right: ${size.tiny};
    ${MEDIA.TABLET`
      margin: auto;
      text-align: center;
      padding: ${size.tiny} 0;
    `};
  }

  span {
    font-weight: bold;
    font-size: 25px;
    font-family: 'Arvo', serif;

    q::before {
      content: open-quote;
      color: ${colors.lightGrey}
      font-size: 35px;
      margin-right: 5px;
      font-family: 'Times New Roman';
    }

    q::after {
      content: close-quote;
      color: ${colors.lightGrey}
      font-size: 35px;
      margin-left: 5px;
      font-family: 'Times New Roman';
    }
  }

  img {
    border-radius: 5px;
    max-width: 150px;
    max-height: 150px;
    margin-right: 20px;
    ${MEDIA.TABLET`
      margin: auto;
      margin-top: 10px;
      margin-bottom: 10px;
      text-align: center;
    `};
  }

  .quotes {
    margin-top: 72px;
    padding-bottom :${size.tiny};
  }

  .description {
    width: 40%;
    font-size: 14px;
    font-weight: bold;
    margin-top: 20px;
    flex-direction: column;
    ${MEDIA.TABLET`
      width: 90%;
      padding-left: ${size.small};
      text-align: left;
    `};
  }

  .author {
    font-size: 14px;
    margin-top: 15px;
  }
`;

const DetailsSection = styled(Hero)`
  background-color: white;
  padding-top: 36px;;
  .detail {
    padding: ${size.micro};
    ${MEDIA.TABLET`
      width: 80%;  
      margin: auto;
      flex-direction: row;
      margin-bottom: ${size.small};
    `};
  }

  .copy {
    text-align: left;
  }
  img {
    align-self: flex-start;
    margin-right: 20px;
    min-width: 30px;
    ${MEDIA.TABLET`
      display: none;
    `};
  }

  h2 {
    width: 80%;
    font-size: 15px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    text-align: left;
    margin-bottom: 4px;
    ${MEDIA.TABLET`
      margin: 0;
      margin-top: 10px;
      margin-bottom: 10px;
      text-align: left;
    `};
  }

  p {
    font-size: 13px;
    font-weight: 500;
    ${MEDIA.TABLET`
      margin: auto;
      text-align: left;
    `};
  }
`;

export {
  Wrapper,
  SubHero,
  TopHero,
  TrustSection,
  QuoteSection,
  DetailsSection,
  PizzaPosition,
};
