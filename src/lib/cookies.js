export function getCookie(name) {
  return document.cookie
    .split(";")
    .map(item => item.trim())
    .find(item => item.startsWith(`${name}=`));
}

export function getCookieValue(name) {
  const cookie = getCookie(name);
  return cookie ? cookie.split("=")[1] : null;
}

export function setCookie(name, value, path = "/") {
  document.cookie = `${name}=${value};path=${path}`;
}

export function deleteCookie(name) {
  const cookie = getCookie(name);
  document.cookie = `${cookie};expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;`;
}
