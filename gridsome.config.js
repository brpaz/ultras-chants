// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Ultras Chants Database',
  siteDescription: 'Site that contains a database of my favorite Ultras chants',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss'
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Chant',
        path: './content/**/*.md',
        remark: {
          // remark options
        }
      }
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
  templates: {
    Chant: '/teams/:team/:id'
    //Team: "/teams/:slug"
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  }
}
