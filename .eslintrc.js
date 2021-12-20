process.env.NODE_ENV = "development";

module.exports = {
  "extends": [
    "react-app",
    "react-app/jest",
    "plugin:jest-dom/recommended"
  ],
  "plugins": [
    "jest-dom"
  ],
  "ignorePatterns": [
    "build",
    "public",
    "stories",
    "/**/node_modules/*"
  ],
  "rules": {
    "no-restricted-globals": [1],
  },
};
