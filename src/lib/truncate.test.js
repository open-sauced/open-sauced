import {truncate} from "./truncate";

describe("Test: truncate()", () => {
  test("string should truncate with length", () => {
    const string = "test/testtesttest";
    const result = truncate(string, 12);
    expect(result).toBe("test/test...");
  });

  test("'string should truncate with ending", () => {
    const string = "test/testtesttest";
    const result = truncate(string, 12, "!!!");
    expect(result).toBe("test/test!!!");
  });
});
