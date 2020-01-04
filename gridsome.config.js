const path = require('path')

// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Ultras Chants Database',
  siteDescription: 'Site that contains a database of my favorite Ultras chants',
  plugins: [
    {
      use: '~/src/plugins/source-chants',
      options: {
        baseDir: path.join(__dirname, 'content')
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss'
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        collections: [
          {
            typeName: 'Team',
            indexName: 'teams',
            fields: ['name', 'path']
          },
          {
            typeName: 'Chant',
            indexName: 'chants',
            fields: ['name', 'path']
          }
        ],
        searchFields: ['name']
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  }
}
