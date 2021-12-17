 
import { getUserFromJwt } from "./identityActions";

const mockedOneGraphAuth = {
  accessToken: () => {
    const mockedPayload = btoa(
      JSON.stringify({ user: { email: "test@test.com", id: 123 } })
    );
    // Mocked JWT
    const accessToken = "header." + mockedPayload + ".signature";
    return { accessToken };
  }
};

describe("loginUser", () => {
  it("should decode a user from a JWT via onegraph-auth", () => {
    const user = getUserFromJwt(mockedOneGraphAuth);
    expect(user.email).toBe("test@test.com");
    expect(user.id).toBe(123);
  });
});
