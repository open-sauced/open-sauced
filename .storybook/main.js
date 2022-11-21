module.exports = {
  core: { builder: "@storybook/builder-vite" },
  stories: ["../stories/**/*.stories.jsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-storysource",
    "storybook-dark-mode",
  ],
  staticDirs: ["../.storybook"],
};
