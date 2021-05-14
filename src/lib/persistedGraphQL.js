// This file is temporary and meant to be a workaround for GitHub App limitations
// https://github.com/open-sauced/open-sauced/pull/699#issuecomment-649126860

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
function makeFetch(doc_id, requiredVariables = [], operationName = false) {
  return async function(variables = {}) {
    const body = {doc_id};
    if (operationName) body.operationName = operationName;
    // Validate required variables by presence
    if (requiredVariables.length > 0) {
      if (!variables || variables === undefined) throw "No required variables provided for persisted fetch";
      const missing = [];
      for (name of requiredVariables) {
        if (!variables.hasOwnProperty(name)) missing.push(name);
      }
      if (missing.length > 0) throw `Missing required variables: ${missing.join(", ")}.`;
    }
    if (variables) body.variables = variables;
    const options = {
      method:"POST",
      body: JSON.stringify(body)
    };
    const response = await fetch(url, options)
      .then(res => res.json())
      .then(json => json);
    return response;
  };
}
const persistedForkFetch = makeFetch(doc_id0, ["repoName", "repoOwner"], "FetchUserForkCount");
const persistedRepoDataFetch = makeFetch(doc_id1, ["repo", "owner"]);
const persistedGoalFetch = makeFetch(doc_id2, ["number"]);
const persistedInteractionsFetch = makeFetch(doc_id3, ["repo", "owner"]);
const persistedIssuesFetch = makeFetch(doc_id4, ["repo", "owner"]);
const persistedDeploymentFetch = makeFetch(doc_id5);
const persistedIssuesByLabelFetch = makeFetch(doc_id6, ["repo", "owner"], "IssuesByLabelQuery");
const persistedIssuesAfterFetch = makeFetch(doc_id8, ["repo", "owner", "cursor"]);
const persistedIssuesBeforeFetch = makeFetch(doc_id9, ["repo", "owner", "cursor"]);
const persistedIssuesByLabelAfterFetch = makeFetch(doc_id10, ["repo", "owner", "cursor"]);
const persistedIssuesByLabelBeforeFetch = makeFetch(doc_id11, ["repo", "owner", "cursor"]);

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
