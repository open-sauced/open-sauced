import React from "react";
import HeroFoo from "../src/components/LoginHero";
import {BrowserRouter} from "react-router-dom";

export default {
  title: "HomePage",
};

export const Hero = () => (
  <BrowserRouter>
    <HeroFoo />
  </BrowserRouter>
);
