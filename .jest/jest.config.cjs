const config = {
  "rootDir": '../',
  "roots": [
    '<rootDir>/src'
  ],
  "verbose": true,
  "notify": true,
  "notifyMode": 'success-change',
  "resetMocks": true,
  "testEnvironment": 'jsdom',
  "setupFilesAfterEnv": [
    '<rootDir>/.jest/setupTests.js'
  ],
  "setupFiles": [
    'react-app-polyfill/jsdom'
  ],
  "testMatch": [
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/tests/*.{js,jsx,ts,tsx}'
  ],
  "transform": {
    '^.+\\.[jt]sx?$': 'esbuild-jest',
    '^.+\\.css$': '<rootDir>/.jest/cssTransform.cjs',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)': '<rootDir>/.jest/fileTransform.cjs',
  },
  "transformIgnorePatterns": [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  "moduleFileExtensions": ['js', 'mjs', 'jsx', 'ts', 'tsx', 'json'],
  "moduleNameMapper": {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  "watchPlugins": [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  "collectCoverageFrom": [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/(icons|illustrations|images|logos|styles|tests)/**/*'
  ],
  "coverageThreshold": {
    'global': {
      'branches': 30,
      'functions': 30,
      'lines': 30,
      'statements': 30
    }
  },
  "coverageReporters": [
    'text',
    'text-summary'
  ],
}

module.exports = config
