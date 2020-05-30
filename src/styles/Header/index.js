import styled from "styled-components";
import Heading from "./Heading";
import HomeNav from "./HomeNav";
import AdminNav from "./AdminNav";
import SimpleHeader from "./SimpleHeader";
import SubHeading from "./SubHeading";
import {Wrapper, FoodElements, TopHero, SubHero, TrustSection, QuoteSection, DetailsSection, PizzaPosition, SaucePosition} from "./Hero";
import {colors} from "../variables";

const AppNav = styled(HomeNav)`
  background-color: ${colors.grey};
  color: ${colors.offWhite};
`;

export {
  AppNav,
  AdminNav,
  Heading,
  TopHero,
  SubHero,
  FoodElements,
  TrustSection,
  QuoteSection,
  DetailsSection,
  SubHeading,
  HomeNav,
  SimpleHeader,
  PizzaPosition,
  SaucePosition,
  Wrapper,
};
