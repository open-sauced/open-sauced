// This file is temporary and meant to be a workaround for GitHub App limitations
// https://github.com/open-sauced/open-sauced/pull/699#issuecomment-649126860
//
const url = "https://serve.onegraph.com/graphql?app_id=06238984-0a96-4774-95ad-d7b654c980c5";

// variables are generically labelled for easy updating.
// TODO: combine these into one doc
const doc_id0 = "9c4b4f3d-c27d-434f-ba20-7ccf8308a9a1"; // FetchUserForkCount
const doc_id1 = "a0722788-adb0-4731-96fb-9e50c72a2528"; // RepoQuery
const doc_id2 = "ed0abd8a-3ff3-46ce-bd1f-04f94af25d12"; // FetchGoal
const doc_id3 = "c8c187a1-853f-446b-b3fa-b4876447c954"; // IssuesQuery
const doc_id4 = "8ecd5737-ebba-4807-a20b-4155272500bf"; // IssuesByLabelQuery
const doc_id5 = "89a3dc22-4355-494e-9d6f-a29c21e065e0"; // FetchDeploymentStatusQuery
const doc_id6 = "a510812e-ad0d-4181-bda3-805ee2481a83"; // IssuesByLabelQuery
const doc_id8 = "b582b05d-ddbe-4334-8118-57e0839de311"; // IssuesAfterQuery
const doc_id9 = "6ff8e5b9-ec3b-41af-acde-9595f2b36980"; // IssuesBeforeQuery
const doc_id10 = "90e25769-0a60-4144-8728-ee9e29ccb926"; // IssuesByLabelAfterQuery
const doc_id11 = "407cef3b-eba4-4caa-9a9e-506b25e3f0c9"; // IssuesByLabelBeforeQuery

// TODO: Move this entire file to an npm package

async function persistedForkFetch(repo, owner, queryName) {
  const options = {
    method: "POST",
    body: JSON.stringify({doc_id: doc_id0, operationName: queryName, variables: {repoName: repo, repoOwner: owner}}),
  };
  const response = await fetch(url, options)
    .then(res => res.json())
    .then(json => json);

  return response;
}

async function persistedRepoDataFetch(owner, repo) {
  const options = {
    method: "POST",
    body: JSON.stringify({doc_id: doc_id1, variables: {repo: repo, owner: owner}}),
  };
  const response = await fetch(url, options)
    .then(res => res.json())
    .then(json => json);

  return response;
}

async function persistedGoalFetch(number) {
  const options = {
    method: "POST",
    body: JSON.stringify({doc_id: doc_id2, variables: {number: number}}),
  };
  const response = await fetch(url, options)
    .then(res => res.json())
    .then(json => json);

  return response;
}

async function persistedInteractionsFetch(owner, repo) {
  const options = {
    method: "POST",
    body: JSON.stringify({doc_id: doc_id3, variables: {repo: repo, owner: owner}}),
  };
  const response = await fetch(url, options)
    .then(res => res.json())
    .then(json => json);

  return response;
}

async function persistedIssuesFetch(owner, repo) {
  const options = {
    method: "POST",
    body: JSON.stringify({doc_id: doc_id4, variables: {repo: repo, owner: owner}}),
  };
  const response = await fetch(url, options)
    .then(res => res.json())
    .then(json => json);

  return response;
}

async function persistedIssuesAfterFetch(owner, repo, cursor) {
  const options = {
    method: "POST",
    body: JSON.stringify({doc_id: doc_id8, variables: {repo: repo, owner: owner, cursor: cursor}}),
  };
  const response = await fetch(url, options)
    .then(res => res.json())
    .then(json => json);

  return response;
}

async function persistedIssuesBeforeFetch(owner, repo, cursor) {
  const options = {
    method: "POST",
    body: JSON.stringify({doc_id: doc_id9, variables: {repo: repo, owner: owner, cursor: cursor}}),
  };
  const response = await fetch(url, options)
    .then(res => res.json())
    .then(json => json);

  return response;
}

async function persistedDeploymentFetch() {
  const options = {
    method: "POST",
    body: JSON.stringify({doc_id: doc_id5}),
  };
  const response = await fetch(url, options)
    .then(res => res.json())
    .then(json => json);

  return response;
}

async function persistedIssuesByLabelFetch(owner, repo, queryName) {
  const options = {
    method: "POST",
    body: JSON.stringify({doc_id: doc_id6, operationName: "IssuesByLabelQuery", variables: {repo: repo, owner: owner}}),
  };
  const response = await fetch(url, options)
    .then(res => res.json())
    .then(json => json);

  return response;
}

async function persistedIssuesByLabelAfterFetch(owner, repo, cursor) {
  const options = {
    method: "POST",
    body: JSON.stringify({doc_id: doc_id10, variables: {repo: repo, owner: owner, cursor: cursor}}),
  };
  const response = await fetch(url, options)
    .then(res => res.json())
    .then(json => json);

  return response;
}

async function persistedIssuesByLabelBeforeFetch(owner, repo, cursor) {
  const options = {
    method: "POST",
    body: JSON.stringify({doc_id: doc_id11, variables: {repo: repo, owner: owner, cursor: cursor}}),
  };
  const response = await fetch(url, options)
    .then(res => res.json())
    .then(json => json);

  return response;
}

export {
  persistedForkFetch,
  persistedDeploymentFetch,
  persistedIssuesFetch,
  persistedIssuesAfterFetch,
  persistedIssuesBeforeFetch,
  persistedInteractionsFetch,
  persistedGoalFetch,
  persistedRepoDataFetch,
  persistedIssuesByLabelFetch,
  persistedIssuesByLabelAfterFetch,
  persistedIssuesByLabelBeforeFetch,
};
