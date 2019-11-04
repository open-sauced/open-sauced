[![Netlify Status](https://api.netlify.com/api/v1/badges/76a3de8e-270c-4adf-89d5-3a3863da74e6/deploy-status)](https://app.netlify.com/sites/open-sauced/deploys)

# Open Sauced

This is a GraphQL starter project to help people stalk open source repositories and take notes on them. This project uses OneGraphl as an interface to the GitHub [GraphQL API](https://developer.github.com/v4/) and Netlify to deploy.

![open-sauced-screencap](https://user-images.githubusercontent.com/5713670/68147572-37bb9a00-ff32-11e9-84a3-f2efd1a78123.png)

## Local development
```
npm start
```

## Test

```
npm test

// to clean snapshots
npm run clean
```
## Storybook
Storybook is being leverage to mock out visual React components. A version of it can be found at this https://storybook-static-4vf6dlv5i.now.sh
```
npm run storybook
```
![storybook example screenshot](https://user-images.githubusercontent.com/5713670/68147486-0cd14600-ff32-11e9-8cc0-fd91f4171b87.png)

## Authentication
Authentication is handled through [OneGraph's AuthGuardian](https://www.onegraph.com/docs/auth_guardian.html) service. 

## Service Worker
This project uses the sw-precache to kickstart an offline cache. The
offline cache only registers in production. If service needs to be
manually removed make an **unregister** call from the registerServiceWorker.js import. 

## Attribution
SVG Icons are from the open source [Feather Icons]() project. 

