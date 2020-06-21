export async function repoStatusCode(repoUrl) {
  const apiRepoUrl = `https://api.github.com/repos/${repoUrl}`;
  const response = await fetch(apiRepoUrl);
  if (response.redirected) {
    return 301;
  } else {
    return response.status;
  }
}
