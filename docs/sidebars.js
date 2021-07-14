/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Contributing',
      collapsed: false,
      items: [
        'contributing/getting-started',
        'contributing/code-of-conduct',
        'contributing/triage-guide',
        'contributing/resolve-merge-conflicts',
        'contributing/fetching-data-from-github'
      ],
    },
    {
      type: 'category',
      label: 'Styling',
      collapsed: false,
      items: [
        'styling/dark-mode'
      ],
    },
    {
      type: 'category',
      label: 'Storybook',
      collapsed: false,
      items: [
        'storybook/getting-started'
      ],
    },
  ],
};
