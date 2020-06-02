import { humanizeNumber } from "./humanizeNumber";

describe("Test: isValidRepoUrl()", () => {
  test(`1000 should humanize`, () => {
    const num = 1000;
    const result = humanizeNumber(num);
    expect(result).toBe("1,000");
  });

  test(`'1000' should humanize`, () => {
    const num = "1000";
    const result = humanizeNumber(num);
    expect(result).toBe("1,000");
  });
});
