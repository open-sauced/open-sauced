export function isValidRepoUrl(url) {
  url = url.toLowerCase().trim();
  url = url.substring(0, 1) === "/" ? url.substring(1) : url;

  const isRelativeUrl = !(url.substring(0,7) === 'http://' || url.substring(0,8) === 'https://' || url.substring(0,4) === 'www.');
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
    const relativeRepoUrl = url.substring(getIndexGithub, url.length);

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
