# Fetching Data from the GitHub GraphQL API

Over the past few years, GitHub has been enabling developers to build on our platform as 3rd party integrators. This enablement does not come without limitations such as rate-limiting and token access. Open Sauced originally started as a way to try out the GitHub GraphQL API with a production-ready application.

## Implementation Approach

Open Sauced is exclusively powered by the public data from open source repos. Not only is the data drawn from open sourced repos, the onboarding flow for Open Sauced walks the user through creating their own open sourced repo in order to track their own contributions. 

## OneGraph

[OneGraph](https://www.onegraph.com/) is the tool used to consume the GitHub GraphQL API through one consistent GraphQL interface.

## Persisted Queries

Persisted queries are an advanced GraphQL feature that allow clients to pre-register queries with the server. In a typical workflow, the client will send the query to the server as part of a build process and the server will send back an id for the query. When the client wants to run the query, it sends the id instead of the full query string.

Developers use persisted queries because they reduce the amount of bandwidth sent from the client to the server and they improve security by locking down the queries that can be sent to the server.

OneGraph makes this all easy to do, and you can read up more on that in [their documentation](https://www.onegraph.com/docs/persisted_queries.html). 

## Goals Repository

Each Open Sauced user leverages their own GitHub repository as a database. The repository is generated during sign up and is the companion for finding open source contributions to make. All data in this repository is a mirror of the data you see on the opensauced.pizza dashboard.

The repo [open-sauced/goals-template](https://github.com/open-sauced/goals-template) is used as a template repo to generate the user's `open-sauced-goals` repo.

## Use of API in Components

The following table shows which components (`src/components/*.js`) use which API functions (`src/lib/apiGraphQL.js', 'src/lib/persistedGraphQL.js`), and what they do.

| Component | API Function | Persisted/Dynamic | Mutation |
| --- | --- | --- | --- |
| AddRepoForm | `api.createGoal`<br/>Add goal through form input | Dynamic | x |
| Contributions | `api.persistedInteractionsFetch`<br/>Contributions list for the user | Persisted | |
| CreateGoals | `api.fetchOwnerId`<br/>Need the repo owner ID first | Dynamic | |
| CreateGoals | `api.createOpenSaucedGoalsRepo`<br/>Create from template | Dynamic | x |
| DangerZone | `api.updateGoal`<br/>Remove the goal | Dynamic | x |
| Issues | `api.persistedIssuesByLabelFetch`<br/>Fetch Goal's issues labeled `good first issue` (First 5) | Persisted | |
| Issues | `api.persistedIssuesFetch`<br/>Fetch Goal's all issues (First 5) | Persisted | |
| Issues | `api.persistedRepositoryIssuesByLabelFetch`<br/>Fetch Goal's all issues (Paginated) | Persisted | |
| Issues | `api.persistedRepositoryIssuesFetch`<br/>Fetch Goal's issues labeled `good first issue` (Paginated) | Persisted | |
| NoteForm | `api.updateGoal`<br/>Updates Notes | Dynamic | x |
| RecommendedRepoList | `api.createGoal`<br/>Add goal based on recommendations list | Dynamic | x |
| Repository | `api.persistedRepoDataFetch`<br/>Gather partial data for goal | Persisted | |
| Repository | `api.fetchGoalQuery`<br/>Gather partial data for goal | Dynamic | |
| Repository | `api.persistedForkFetch`<br/>Look at whether user has this repo forked | Persisted | |
| Repository | `api.persistedForkFetch`<br/>Initiate forking the repo for the user | Persisted | |
| RepositoryGoals | `api.persistedViewerStars`<br/>Fetch repos starred by the user | Persisted | |
| AdminStatsBar | `api.fetchRateLimit`<br/>Shows administrator the status of rate limiting | Dynamic | |
| AdminStatsBar | `api.persistedDeploymentFetch`<br/>Shows administrator deployment status | Persisted | |
| AdminStatsBar | `api.fetchRepoCount`<br/>Shows administrator the user count, based on count of `open-sauced-goals` repos | Dynamic | |

## References
- [Using Persisted Queries](https://www.onegraph.com/docs/persisted_queries.html)
- [GraphQL Enterprise Connect: "Persisted GraphQL", Brian Douglas](https://www.youtube.com/watch?v=yr5kSZljBxo)
