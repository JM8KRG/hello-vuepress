module.exports = {
  title: 'Hello VuePress!',
  description: 'MyVuePressTemplate',
  base: '/docs/vuepress/',
  themeConfig: {
    sidebar: [
      {
        title: '導入',
        collapsable: false,
        children: [
          '/',
          '/docs/start',
          'docs/deploy',
          'docs/config'
        ]
      }
    ]
  }
}