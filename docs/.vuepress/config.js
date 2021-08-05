
module.exports = {
    title: 'chez的开发记录',
    base: '/Blog/',
    description: 'Welcome to my Blog',
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