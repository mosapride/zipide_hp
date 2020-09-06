const { description } = require('../../package');

const { Base64 } = require('js-base64');
const uslugify = (s) => Base64(s);

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Kuro doc',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  // lang: 'ja',
  locales: {
    '/': {
      lang: 'ja',
    },
  },
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/favicon180x180.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicons/favicon16x16.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicons/favicon32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '48x48',
        href: '/favicons/favicon48x48.png',
      },
    ],
    ['link', { rel: 'shortcut icon', href: '/favicons/favicon.ico' }],
    [
      'meta',
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    ['meta', { name: 'theme-color', content: '#4a4a4a' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'TypeScript',
        link: '/TypeScript/',
      },
      {
        text: 'Angular',
        link: '/Angular/',
      },
      {
        text: 'Other',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'HTML&CSS', link: '/htmlcss/' },
          { text: 'Docker&Linux', link: '/dockerLinux/' },
          { text: 'チラシの裏', link: '/blog/' },
        ],
      },
    ],
    sidebar: {
      '/TypeScript/': [
        {
          title: 'TypeScript',
          collapsable: false,
          children: [
            '',
            'developmentEnvironmentInfo',
            'developmentEnvironment',
            'devEnd',
          ],
        },
      ],
      '/Angular/': [
        {
          title: 'Angular',
          collapsable: false,
          children: [
            '',
            'vscode',
            'ngnew',
            'styleCoding',
            'bindingInput',
            'datePipe',
            'outerScript',
          ],
        },
      ],
      '/htmlcss/': [
        {
          title: 'HTML&CSS',
          collapsable: false,
          children: [''],
        },
      ],
      '/dockerLinux/': [
        {
          title: 'Docker&Linux',
          collapsable: false,
          children: [''],
        },
      ],
      '/blog/': [
        {
          title: 'blog',
          collapsable: false,
          children: [''],
        },
      ],
    },
    repo: 'mosapride/hp',
    repoLabel: 'GitHub',
    docsRepo: 'mosapride/hp',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'GitHub',
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      md.set({ breaks: false });
      md.use(require('markdown-it-imsize'));
      md.use(require('markdown-it-anchor'), {
        slugify: uslugify,
      });
      md.disable(['link']);
      md.enable(['link']);
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/medium-zoom',
    'vuepress-plugin-smooth-scroll',
    'vuepress-plugin-redirect',
    '@vuepress/search',
    {
      searchMaxSuggestions: 10,
    },
    {
      locales: true,
    },
    '@vuepress/active-header-links',
    {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor',
    },
    '@vuepress/google-analytics',
    {
      ga: 'UA-24357312-11', // UA-00000000-0
    },
  ],
};
