import {validateToken} from "./validateToken";

describe("Test: validateToken()", () => {
  test("valid token", () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const result = validateToken({
      tokenExpireDate: () => tomorrow
    });
    expect(result).toBe(true);
  });

  test("invalid token: token expired", () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const result = validateToken({
      tokenExpireDate: () => yesterday
    });
    expect(result).toBe(false);
  });
});
