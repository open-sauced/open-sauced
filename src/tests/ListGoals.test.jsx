import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render, screen, cleanup} from "@testing-library/react";
import ListGoals from "../components/ListGoals";
import {BrowserRouter} from "react-router-dom";
import {data} from "./mocks";
import {axe, toHaveNoViolations} from "jest-axe";
expect.extend(toHaveNoViolations);

const {goals} = data;
describe("<ListGoals />", ()=>{
  const setupRender = async () => {
    return render(
      <BrowserRouter>
        <ListGoals goals={goals} data={[]} />
      </BrowserRouter>
    ); 
  };
  afterEach(()=>{
    cleanup();
  });
  it("should have no violations", async () => {
    const {container} = await setupRender();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("should have a search field", async () => {
    await setupRender();
    expect(screen.getByLabelText("search")).toHaveAttribute("type","search");
  });
  it("should have a sort selection field", async () => {
    await setupRender();
    expect(screen.getByRole("combobox").tagName).toEqual("SELECT");
  });
  it("should include links for each goal", async () => {
    await setupRender();
    const links = screen.getAllByRole("link");
    goals.nodes.forEach((goal)=>{
      const linkFound = links.some(link => {
        return link.getAttribute("href") === `/repos/${goal.full_name}/`;
      });
      expect(linkFound).toBeTruthy();
    });  
  });
});