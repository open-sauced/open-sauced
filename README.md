[![CircleCI](https://circleci.com/gh/bdougie/open-sauced.svg?style=svg)](https://circleci.com/gh/bdougie/open-sauced)
# Open Sauced

This is a GraphQL starter project to help people stalk open source repositories and take notes on them. This project uses Graphcool as a GraphQL backend, Apollo as the GraphQL client, and Netlify to deploy. 

The data fetching from GitHub uses their GraphQL Early Access API
exclusively.

![open-sauced-screencap](http://i.imgur.com/VlZVmtB.png)

## Setup

### 1. GraphQL Backend
[![graphql-up](http://static.graph.cool/images/graphql-up.svg)](https://www.graph.cool/graphql-up/new?source=https://raw.githubusercontent.com/bdougie/open-sauced/master/types.graphql)

Setup your GraphQL backend using the *graphql-up* button at the top of this section. Once your backend is created in Graphcool, copy your GraphQL enpoint using the enpoints link.

![endpoint](http://i.imgur.com/cYFsaQs.png)

### 2. Retrieve GitHub Access Token
**!Important**: 👉 To get access to the GitHub early access GraphQL API, fill out the [prerelease agreement](https://github.com/prerelease/agreement)

You will need a GitHub access token to access the repository data
fetching portion of this app. You can find [instructions on how to retrieve one](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) on GitHub.

![token-example](http://i.imgur.com/TAvrse9.png)

Be sure to allow access to your user information when creating your token.

![token-options](http://i.imgur.com/WefKl5c.png)

### 3. Deploy to Netlify 

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/bdougie/open-sauced&stack=cms)

Click the deploy to Netlify button and add your GitHub access token and Graphcool Endpoint.

![netlify-deploy](http://i.imgur.com/Ew8G2z8.png)

## Graphcool Framework

### Project Structure
The central configuration of your upgraded Service lives in the `graphcool.yml`.
There, all your permissions, functions and types are tied together.
You can find your schema in the `types.graphql`.

### Deployment
To deploy changes of your service, just execute
```sh
$ graphcool deploy
```

### Resources

#### CLI
You can read more about the CLI in the [new docs](https://docs-next.graph.cool/reference/graphcool-cli/overview-zboghez5go)
Or execute `graphcool` to see the usage overview.
#### graphcool.yml
The `graphcool.yml` format is described here: https://docs-next.graph.cool/reference/service-definition/graphcool.yml-foatho8aip

## Test

```
npm test

// to clean snapshots
npm run clean
```
## Authentication
Authentication is handled through [Netlify's Identity](https://www.netlify.com/docs/identity/) service. By default, user registration is open, meaning users can sign up using a form on your site. You can include the [Netlify Identity widget](https://github.com/netlify/netlify-identity-widget) in your site to handle this, or build your own form and integrate it using [gotrue-js](https://github.com/netlify/gotrue-js).

## Service Worker
This project uses the sw-precache to kickstart an offline cache. The
offline cache only registers in production. If service needs to be
manually removed make an **unregister** call from the registerServiceWorker.js import. 

## Attribution

SVG Icons are from the open source [Feather Icons]() project. 

