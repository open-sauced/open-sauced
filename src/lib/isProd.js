export function isProd() {
  if (process.env.NODE_ENV === "development") {
    return false;
  } else {
    return true;
  }
}
