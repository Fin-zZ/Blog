
module.exports = {
    title: 'blog',
    base: '/blog/',
    // description: 'muamua',
    themeConfig: {
      lastUpdated: 'Last Updated',
      smoothScroll: true,
      siderbar:[
        {
          sidebarDepth: 2,
        }
      ],
      nav: [
        {text: 'HOME', link: '/css/flex.html'},
        {text: 'github', link: 'https://xdmatirx.github.io/'}
      ]
    },
    plugins: [
      '@vuepress/back-to-top',
      'autobar',
      'fulltext-search',
    ]
}