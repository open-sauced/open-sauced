import React from "react";
import Card from "../src/components/Card";

export default {
  title: "Card",
};

const goalData = {
  title: "nodejs/node",
  description: "Node.js JavaScript runtime ✨🐢🚀✨",
  labels: {nodes: [{id: 1, description: "contribution"}]},
};

export const text = () => <Card goal={goalData} stars={328} contributors={23} />;
