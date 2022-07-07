// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const ArchivedVersions = require("./archivedVersions.json");

/** @type {import('@docusaurus/types').Config} */
const config = {
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  title: "Rahat - Aid Token Distribution",
  tagline:
    "Supporting vulnerable communities with a simple and efficient relief distribution platform.",
  url: "https://docs.rahat.io",
  baseUrl: "/",
  projectName: "rahat-documentation", // Usually your repo name.
  organizationName: "esatya", // Usually your GitHub org/user name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  plugins: [
    [
      "docusaurus-plugin-openapi",
      {
        openapiPath: require.resolve("./openApi/swagger.json"),
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/esatya?tab=repositories",
        },
        blog: {
          path: "blog",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Rahat Logo",
          src: "https://rahat.esatya.io/images/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Docs",
          },
          // api dropdown starts
          {
            type: "dropdown",
            label: "API",
            position: "right",
            items: [
              {
                label: "Rahat Agency",
                to: "api",
              },
              {
                label: "Rahat Crowdfunding",
                href: "https://www.facebook.com",
              },
            ],
          },
          // api dropdown ends
          { to: "blog", label: "Releases", position: "right" },
          {
            to: "/help",
            position: "right",
            label: "Help",
          },
          
          {
            type: "docsVersionDropdown",
            position: "left",
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              ...Object.entries(ArchivedVersions).map(
                ([versionName, versionUrl]) => ({
                  to: versionUrl,
                  label: versionName,
                })
              ),
              {
                to: "/versions",
                label: "All versions",
              },
            ],
          },
          { type: "localeDropdown", position: "right" },
          {
            href: "https://github.com/esatya?tab=repositories",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/PvSuZyDb",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/rahataid",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "https://rahat.esatya.io/blogs/",
              },
              {
                label: "GitHub",
                href: "https://github.com/esatya?tab=repositories",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rahat. A part of Rumsan Company. Designed by Rumsan | <a href="/privacy-policy">Privacy Policy</a> | `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // algolia: {
      //   indexName: "jest-v2",
      //   apiKey: "833906d7486e4059359fa58823c4ef56",
      //   contextualSearch: true,
      // },
    }),
};

module.exports = config;
