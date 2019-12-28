const slug = require('slug')
const path = require('path')
const { readdirSync } = require('fs')

// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource((actions) => {
    // TODO iterate over all the folders and create a type
    collection = actions.addCollection('Team')

    const folders = readdirSync(path.join(__dirname, 'content'), {
      withFileTypes: true
    })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)

    for (folder of folders) {
      collection.addNode({
        name: folder,
        slug: folder,
        path: `/teams/${folder}`,
        logo: require.resolve(`./src/assets/logos/${folder}.png`)
      })
    }
    console.log(folders)
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  api.onCreateNode((options) => {
    if (options.internal.typeName !== 'Chant') {
      return options
    }

    options.slug = slug(options.name, {
      lower: true
    })

    options.team = path.basename(options.fileInfo.directory)

    return options
  })
}
