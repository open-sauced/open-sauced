export function isDev() {
  if (process.env.NODE_ENV === "development") {
    return true;
  } else {
    return false;
  }
}
