module.exports = {
  "moduleFileExtensions": [
    "jsx",
    "js",
    "json"
  ],
  "globals": {
    "window": true
  },
  "moduleNameMapper": {
    "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/config/jest/FileStub.js",
    "^.+\\.css$": "<rootDir>/config/jest/CSSStub.js",
    "react-markdown": "<rootDir>/config/jest/react-markdown.js"
  },
  "setupFiles": [
    "<rootDir>/config/polyfills.js",
    "<rootDir>/src/setupTestFramework.js",
    "jest-localstorage-mock"
  ],
  "testPathIgnorePatterns": [
    "<rootDir>/(build|docs|node_modules)/"
  ],
  "testEnvironment": "node",
  "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(js|jsx)$",
};
