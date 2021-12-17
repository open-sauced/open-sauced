process.env.NODE_ENV = "development";

module.exports = {
  "extends": [
    "react-app"
  ],
  "ignorePatterns": [
    "build",
    "public",
    "stories"
  ],
  "rules": {
    "no-restricted-globals": [1]
  },
};
