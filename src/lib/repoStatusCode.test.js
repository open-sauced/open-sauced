import {repoStatusCode} from "./repoStatusCode";

describe("Test: repoStatusCode()", () => {
  test("github/gh-ost should return 200", async() => {
    const repoUrl = "github/gh-ost";
    const [result] = await repoStatusCode(repoUrl);
    expect(result).toBe(200);
  });

  test("github/ghost should return 404", async() => {
    const repoUrl = "github/ghost";
    const [result] = await repoStatusCode(repoUrl);
    expect(result).toBe(404);
  });

  test("open-sauced/open-sauced should return 200", async() => {
    const repoUrl = "open-sauced/open-sauced";
    const [result] = await repoStatusCode(repoUrl);
    expect(result).toBe(200);
  });

  test("finitesingularity/tau should return 301", async() => {
    const repoUrl = "finitesingularity/tau";
    const [result, newFullName] = await repoStatusCode(repoUrl);
    expect(result).toBe(301);
    expect(newFullName).toBe("Team-TAU/tau");
  });
});
