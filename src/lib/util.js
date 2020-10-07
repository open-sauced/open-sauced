export function isValidRepoUrl(url) {

  try {
    url = url.trim().toLowerCase();
    url = url.substr(0, 1) === "/" ? url.substr(1) : url;


    const isRelativeUrl = url.substr(0, 4) !== "http";
    if (isRelativeUrl) {
      return relativeUrlValidator(url);
    }
    return absoluteUrlValidator(url);

  } catch (_) {
    return [false, null];
  }
}

function relativeUrlValidator(url) {

  const githubLink = "github.com/";

  const newUrl = "https://" + githubLink + url;
  new URL(newUrl);

  const [owner, repo] = url.split("/");
  if (!owner || !repo) {
    return [false, null];
  }
  return [true, url];
}

function absoluteUrlValidator(url) {

  const githubLink = "github.com/";
  new URL(url);

  const getIndexGithub = url.indexOf(githubLink) + githubLink.length; //?
  const relativeRepoUrl = url.substr(getIndexGithub, url.length);

  const [owner, repo] = relativeRepoUrl.split("/");
  if (!owner || !repo) {
    return [false, null];
  }
  return [true, owner + "/" + repo];
}
