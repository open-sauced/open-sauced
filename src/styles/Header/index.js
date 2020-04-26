import styled from "styled-components";
import Heading from "./Heading";
import HomePageHeader from "./HomePageHeader";
import SimpleHeader from "./SimpleHeader";
import SubHeading from "./SubHeading";
import {TopHero, SubHero, TrustSection, PizzaPosition, SaucePosition} from "./Hero";
import {colors} from "../variables";

const AppNav = styled(HomePageHeader)`
  background-color: ${colors.lightestGrey};
  color: ${colors.grey};
`;

export {
  AppNav,
  Heading,
  TopHero,
  SubHero,
  TrustSection,
  SubHeading,
  HomePageHeader,
  SimpleHeader,
  PizzaPosition,
  SaucePosition,
};
