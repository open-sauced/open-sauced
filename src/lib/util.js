export function isValidRepoUrl(url) {
  url = url.trim();
  url = url.substr(0, 1) === "/" ? url.substr(1) : url;

  const isRelativeUrl = !(url.substr(0, 4) === "http" || url.includes(".com") || url.includes("www."));
  if (isRelativeUrl) {
    return relativeUrlValidator(url);
  }

  return absoluteUrlValidator(url);

}

function relativeUrlValidator(url) {
  try {
    const githubLink = "github.com/";
    const newUrl = "https://" + githubLink + url;
    const urlObject = new URL(newUrl);

    const [owner, repo] = url.split("/");
    if (!owner || !repo || !(urlObject.protocol === "http:" || urlObject.protocol === "https:")) {
      return [false, null];
    }
    return [true, url];
  } catch (failedToConstructURL) {
    return [false, null];
  }
}

function absoluteUrlValidator(url) {
  try {
    const githubLink = "github.com/";
    const urlObject = new URL(url);

    const getIndexGithub = url.indexOf(githubLink) + githubLink.length;
    const relativeRepoUrl = url.substr(getIndexGithub, url.length);

    const [owner, repo] = relativeRepoUrl.split("/");

    if (urlObject.hostname !== "github.com") {
      return [false, null];
    }
    if (!owner || !repo || !(urlObject.protocol === "http:" || urlObject.protocol === "https:")) {
      return [false, null];
    }
    return [true, owner + "/" + repo];
  } catch (failedToConstructURL) {
    return [false, null];
  }
}
