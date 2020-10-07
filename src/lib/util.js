export function isValidRepoUrl(url) {

  try {
    url = url.trim().toLowerCase();
    url = url.substr(0, 1) === "/" ? url.substr(1) : url;

    const githubLink = "github.com/";
    let newUrl;

    const isRelativeUrl = url.substr(0, 4) !== "http";
    if (isRelativeUrl) {
      newUrl = "https://" + githubLink + url;
      new URL(newUrl);

      const [owner, repo] = url.split("/");
      if (!owner || !repo) {
        return [false, null];
      }
      return [true, url];
    }
    const getIndexGithub = url.toLowerCase().indexOf(githubLink) + githubLink.length; //?
    const relativeRepoUrl = url.toLowerCase().substr(getIndexGithub, url.length);

    const [owner, repo] = relativeRepoUrl.split("/");
    if (!owner || !repo) {
      return [false, null];
    }
    return [true, owner + "/" + repo];
  } catch (_) {
    return [false, null];
  }
}
