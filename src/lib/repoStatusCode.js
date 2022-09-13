export async function repoStatusCode(repoUrl) {
  const apiRepoUrl = `https://api.github.com/repos/${repoUrl}`;
  const response = await fetch(apiRepoUrl);
  const {full_name} = await response.json();
  if (apiRepoUrl !== response.url) {
    return [301, full_name];
  } else {
    return [response.status,""];
  }
}
