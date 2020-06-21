import {repoStatusCode} from "./repoStatusCode";

describe("Test: repoStatusCode()", () => {
  test("github/gh-ost should return 200", async() => {
    const repoUrl = "github/gh-ost";
    const result = await repoStatusCode(repoUrl);
    expect(result).toBe(200);
  });

  test("github/ghost should return 404", async() => {
    const repoUrl = "github/ghost";
    const result = await repoStatusCode(repoUrl);
    expect(result).toBe(404);
  });

  // TODO: After the 1.0 launch, I would love to circle back to the testing issue and find solutions.
});
