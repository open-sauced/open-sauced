module.exports = {
  "extends": "@open-sauced/semantic-release-conventional-config",
  "plugins": [
    ["@semantic-release/git", {
      "assets": [
        "CHANGELOG.md",
        "package.json",
        "npm-shrinkwrap.json",
        "public/diagram.svg"
      ],
    }]
  ]
};
