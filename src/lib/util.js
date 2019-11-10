export function isValidRepoUrl(url) {
  const regex = new RegExp("https?://github.com/", "i"); // passing "i" as 2nd argument to ignore case
  const isFullUrl = regex.test(url);
  const relativeRepoUrl = isFullUrl ? url.toLowerCase().replace(regex, "") : url.toLowerCase();

  const [owner, repo] = relativeRepoUrl.split("/");
  if (!owner || !repo) {
    return [false, null];
  }
  return [true, relativeRepoUrl];
}
