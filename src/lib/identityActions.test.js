import {loginUser, logoutUser} from "./identityActions";
const VALUE = "abc123";
const KEY = "currentOpenSaucedUser";

describe("loginUser", () => {
  const response = {code: VALUE};

  it("should initialize app withou a user set", () => {
    expect(localStorage.getItem(KEY)).toBeNull();
  });

  it("should set user when logging in", () => {
    loginUser(response);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
  });

  it("should remove user when logging out", () => {
    loginUser(response);
    logoutUser();
    expect(localStorage.getItem(KEY)).toBeNull();
  });
});
