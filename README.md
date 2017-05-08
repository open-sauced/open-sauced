[![CircleCI](https://circleci.com/gh/bdougie/open-sauced.svg?style=svg)](https://circleci.com/gh/bdougie/open-sauced)
# Open Sauced

This is a GraphQL starter project to help people stalk open source repositories and take notes on them. This project uses Graphcool as a GraphQL backend, Apollo as the GraphQL endpoint, and Netlify to deploy. 

The data fetching from GitHub uses their GraphQL Early Access API
exclusively.

![open-sauced-screencap](http://i.imgur.com/VlZVmtB.png)

## Setup

### 1. GraphQL Backend
[![graphql-up](http://static.graph.cool/images/graphql-up.svg)](https://www.graph.cool/graphql-up/new?source=https://raw.githubusercontent.com/bdougie/open-sauced/master/open-sauced.schema)

Setup your GraphQL backend using the *graphql-up* button at the top of this section. Once your backend is created in Graphcool, copy your GraphQL enpoint using the enpoints link.

![endpoint](http://i.imgur.com/cYFsaQs.png)

### 2. Retrieve GitHub Access Token
**!Important**: 👉 To get access to the GitHub early access GraphQL API, fill out the [prerelease agreement](https://github.com/prerelease/agreement)

You will need a GitHub access token to access the repository data
fetching portion of this app. Instructions on how to retrieve one is
[here](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)

![token-example](http://i.imgur.com/TAvrse9m.png)

Be sure to allow access to your user information when creating your token.

![token-options](http://i.imgur.com/WefKl5cm.png)

### 3. Deploy to Netlify 

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/bdougie/open-sauced)

Click the deploy to Netlify button and add your GitHub access token and Graphcool Endpoint.

![netlify-deploy](http://i.imgur.com/Ew8G2z8.png)
