import React from "react";
import Card from "../src/components/Card";
import Footer from "../src/components/Footer";
import DashboardFooter from "../src/styles/Footer";
import Background from "../src/styles/Background";
import {sauced} from "../src/images";

export default {
  title: "Footer",
};

export const Basic = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <div style={{paddingRight: 16, float: "right", width: 200}}>
      <img src={sauced} alt="sauced" />
    </div>
  </Background>
);

export const BasicWithCard = () => (
  <Background style={{height: 1024, padding: "10px"}}>
    <Card>
      <div style={{height: 800}} />
    </Card>
    <DashboardFooter>
      <img src={sauced}  alt="sauced" />
    </DashboardFooter>
  </Background>
);

export const HomepageFooter = () => (
  <Background style={{textAlign: "center", height: 1024, padding: "10px"}}>
    <Footer />
  </Background>
);

export const HomePageWithCard = () => (
  <Background style={{textAlign: "center", height: 1024, padding: "10px"}}>
    <Card>
      <div style={{height: 800}} />
    </Card>
    <Footer />
  </Background>
);
