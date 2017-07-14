import React from "react";
import ReactDOM from "react-dom";
import Count from "../components/Count";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Count />, div);
});
