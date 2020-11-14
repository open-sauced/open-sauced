module.exports = {
  "stories": [
    "../stories/**/*.stories.js"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-storysource"
  ],
  webpackFinal: async config => {
    config.resolve.alias ={
      ...config.resolve.alias,
      // this is needed because there is some other packages that needs a different version of core-js
      // so what this does is references the core-js version specific to storybook
      "core-js/modules":"@storybook/core/node_modules/core-js/modules"
    }

    return config
  }
}