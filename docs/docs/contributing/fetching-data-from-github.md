# Fetching Data from the GitHub GraphQL API

Over the past few years, GitHub has been enabling developers to build on our platform as 3rd party integrators. This enablement does not come without limitations such as rate-limiting and token access. Open Sauced originally started as a way to try out the GitHub GraphQL API with a production-ready application.

## Implementation Approach

Open Sauced is exclusively powered by the public data from open source reposistories. Not only is the data drawn from open sourced repos, the onboarding flow for Open Sauced walks the user through creating their own open sourced repo in order to track their own contributions. 

## OneGraph

[OneGraph](https://www.onegraph.com/) is the tool used to consume the GitHub GraphQL API through one consistent GraphQL interface.

## Persisted Queries

Persisted queries are an advanced GraphQL feature that allow clients to pre-register queries with the server. In a typical workflow, the client will send the query to the server as part of a build process and the server will send back an id for the query. When the client wants to run the query, it sends the id instead of the full query string.

Developers use persisted queries because they reduce the amount of bandwidth sent from the client to the server and they improve security by locking down the queries that can be sent to the server.

OneGraph makes this all easy to do, and you can read up more on that in [their documentation](https://www.onegraph.com/docs/persisted_queries.html). 

## Goals Repository

Each Open Sauced user leverages their own GitHub repository as a database. The repository is generated during sign up and is the companion for finding open source contributions to make. All data in this repository is a mirror of the data you see on the opensauced.pizza dashboard.

The repo [open-sauced/goals-template](https://github.com/open-sauced/goals-template) is used as a template repo to generate the user's `open-sauced-goals` repo.

## References
- [Using Persisted Queries](https://www.onegraph.com/docs/persisted_queries.html)
- [GraphQL Enterprise Connect: "Persisted GraphQL", Brian Douglas](https://www.youtube.com/watch?v=yr5kSZljBxo)
