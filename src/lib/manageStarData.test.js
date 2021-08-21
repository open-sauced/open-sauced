import {remainingStars} from "./manageStarData";

const testData = [
  {full_name: "graphql/graphiql", stargazers_count: 12529, open_issues_count: 181, forks_count: 1338},
  {full_name: "11ty/eleventy", stargazers_count: 9894, open_issues_count: 441, forks_count: 281},
];
const testStars = [
  {full_name: "graphql/graphiql", stargazers_count: 12529, open_issues_count: 181, forks_count: 1338},
  {full_name: "open-sauced/open-sauced", stargazers_count: 12529, open_issues_count: 181, forks_count: 1338},
  {full_name: "11ty/eleventy", stargazers_count: 9894, open_issues_count: 441, forks_count: 281},
];

// test cases for the remainingStars function
describe("remainingStars", () => {
  test("should return the only one of remaining stars", async() => {
    expect(remainingStars(testData, testStars).length).toBe(1);
  });
});
