import React from "react";
import HeroFoo from "../src/components/Hero";
import {BrowserRouter} from "react-router-dom";

export default {
  title: "Hero",
};

export const Hero = () => (
  <BrowserRouter>
    <HeroFoo />
  </BrowserRouter>
);

