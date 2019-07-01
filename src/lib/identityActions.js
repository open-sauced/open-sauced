export function loginUser(response) {
  response && localStorage.setItem("currentOpenSaucedUser", response.code);
}

export function logoutUser() {
  localStorage.removeItem("currentOpenSaucedUser");
}
