export function isValidRepoUrl(url) {

  try {

    const isRelativeUrl = url.substr(0, 1) === "/";

    if (isRelativeUrl)
      url = "https://github.com" + url;
    const checkIfValidByInstantiation = new URL(url);
    const regex = new RegExp("https?://github.com/", "i"); // passing "i" as 2nd argument to ignore case
    const relativeRepoUrl = url.toLowerCase().replace(regex, "");

    const [owner, repo] = relativeRepoUrl.split("/");
    if (!owner || !repo) {
      return [false, null];
    }
    return [true, relativeRepoUrl];
  } catch (_) {
    return [false, null];
  }
}
