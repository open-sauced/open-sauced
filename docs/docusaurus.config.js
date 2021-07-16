const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Open Sauced',
  tagline: 'Dinosaurs are cool',
  url: 'https://docs.opensauced.pizza',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'open-sauced', // Usually your GitHub org/user name.
  projectName: 'open-sauced', // Usually your repo name.
  trailingSlash: true,
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Open Sauced Logo',
        src: 'img/logo.svg',
        href: 'https://opensauced.pizza/'
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://opensauced.pizza/',
          label: 'Home',
          position: 'right',
        },
        {
          href: 'https://github.com/open-sauced/open-sauced',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/open-sauced/open-sauced/discussions',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/U2peSNf23P',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/saucedopen',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://dev.to/opensauced',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Open Sauced. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/open-sauced/open-sauced/edit/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
