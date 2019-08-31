export function getUserFromJwt(auth) {
  const rawJwt = auth.accessToken() || {};
  const jwtPayload = (rawJwt.accessToken || "").split(".")[1];
  const decodedString = atob(jwtPayload || "") || "{}";

  return JSON.parse(decodedString).user;
}
