<div align="center">
  <br>
  <img alt="Open Sauced" src="https://i.ibb.co/7jPXt0Z/logo1-92f1a87f.png" width="300px">
  <h1>🍕 Open Sauced 🍕</h1>
  <strong>The path to your next Open Source contribution</strong>
</div>
<br>
<p align="center">
  <a href="https://github.com/open-sauced/open-sauced/actions?query=workflow%3A%22Node+CI%22">
    <img src="https://github.com/open-sauced/open-sauced/workflows/Node%20CI/badge.svg" alt="Node CI">
  </a>
  <a href="https://app.netlify.com/sites/open-sauced/deploys">
    <img src="https://api.netlify.com/api/v1/badges/76a3de8e-270c-4adf-89d5-3a3863da74e6/deploy-status" alt="Netlify Status">
  </a>
  <img src="https://badgen.net/dependabot/open-sauced/open-sauced?icon=dependabot" alt="Dependabot Badge">
  <img src="https://img.shields.io/github/languages/code-size/open-sauced/open-sauced" alt="GitHub code size in bytes">
  <img src="https://img.shields.io/github/commit-activity/w/open-sauced/open-sauced" alt="GitHub commit activity">
  <a href="https://github.com/open-sauced/open-sauced/issues">
    <img src="https://img.shields.io/github/issues/open-sauced/open-sauced" alt="GitHub issues">
  </a>
</p>

Open Sauced provides structure onboarding for new contributors to open source. This structure provides a way to track your next contributions by leveraging a unique dashboard built on top of the [GitHub GraphQL API](https://developer.github.com/v4/).

[![open-sauced-screencap](/src/images/homepage.png)
](https://opensauced.pizza)

## 🤝 Contributing

We encourage you to contribute to Open Sauced! Please check out the [Contributing guide](CONTRIBUTING.md) for guidelines about how to proceed.

<img align="right" src="https://i.ibb.co/CJfW18H/ship.gif" width="200"/>

## 📖 Prerequisites

- [Node.js](https://nodejs.org/en/): we recommend using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to install the Node version.
- [NPM](https://npmjs.com/): please refer to their [installation guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

## 🖥️ Local development

```
npm install
npm start
```

## 🧪 Test

```
npm test

// to clean snapshots
npm run clean
```

## 📙 Storybook

Storybook is being leveraged to mock out visual React components. The latest version of the design system can be found at this [url](https://sauced-components.netlify.app/).

```
npm run storybook
```

![storybook example screenshot](https://user-images.githubusercontent.com/5713670/68147486-0cd14600-ff32-11e9-8cc0-fd91f4171b87.png)

## 🔑 Authentication

Authentication is handled through [OneGraph's AuthGuardian](https://www.onegraph.com/docs/auth_guardian.html) service. 

## 💾 Database

This project uses GitHub as a database. When you login, you will be presented whena button to create a goals repository. That repository template lives at [open-sauced/goals-template](https://github.com/open-sauced/goals-template).

## 💨 Service Worker

This project uses the sw-precache to kickstart an offline cache. The offline cache only registers in production. If service needs to be manually removed make an **unregister** call from the registerServiceWorker.js import. 

## ⚖️ LICENSE

MIT © [Open Sauced](LICENSE)
