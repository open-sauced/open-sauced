// OneGraph has an expire date on the token it stores in local storage
// check to make sure the token hasn't expired
export function validateToken(auth) {
  try {
    return auth.tokenExpireDate() > Date.now();
  } catch (e) {
    console.log(`Error checking valid: ${e}`);
    return false;
  }
}
