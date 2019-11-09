import "@testing-library/jest-dom/extend-expect";
import {isValidRepoUrl} from "../lib/util";

describe("Test: isValidRepoUrl()", () => {
  const repoName = "repo_name";
  const ownerName = "owner_name";
  const baseUrl = "http://github.com/";
  const baseSecureUrl = "https://github.com/";
  test(`repo-url '${baseUrl}${ownerName}/${repoName}' should pass`, () => {
    const repoUrl = `${baseUrl}${ownerName}/${repoName}`;
    const [isValid, relativeRepoUrl] = isValidRepoUrl(repoUrl);
    expect(isValid).toBe(true);
    expect(relativeRepoUrl).toBe(`${ownerName}/${repoName}`.toLowerCase());
  });
  test(`repo-url '${baseSecureUrl}${ownerName}/${repoName}' should pass`, () => {
    const repoUrl = `${baseSecureUrl}${ownerName}/${repoName}`;
    const [isValid, relativeRepoUrl] = isValidRepoUrl(repoUrl);
    expect(isValid).toBe(true);

    expect(relativeRepoUrl).toBe(`${ownerName}/${repoName}`.toLowerCase());
  });
  test(`repo-url '${baseUrl}${ownerName}' should fail`, () => {
    const repoUrl = `${baseUrl}${ownerName}`;
    const [isValid] = isValidRepoUrl(repoUrl);
    expect(isValid).toBe(false);
  });
  test(`repo-url '${ownerName}/${repoName}' should paas`, () => {
    const repoUrl = `${ownerName}/${repoName}`;
    const [isValid, relativeRepoUrl] = isValidRepoUrl(repoUrl);
    expect(isValid).toBe(true);
    expect(relativeRepoUrl).toBe(`${ownerName}/${repoName}`);
  });
  test(`repo-url '${repoName}' should fail`, () => {
    const [isValid] = isValidRepoUrl(`${repoName}`);
    expect(isValid).toBe(false);
  });
  test(`repo-url '${ownerName}' should fail`, () => {
    const [isValid] = isValidRepoUrl(`${ownerName}`);
    expect(isValid).toBe(false);
  });
  test("Case insensitive test", () => {
    expect(isValidRepoUrl("Http://github.com/owner_name/repo_name")[0]).toBe(true);
    expect(isValidRepoUrl("Https://github.com/owner_name/repo_name")[0]).toBe(true);
    expect(isValidRepoUrl("http://GITHUB.com/owner_name/repo_name")[0]).toBe(true);
  });
});
