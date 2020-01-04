const slug = require('slug')
const path = require('path')
const fs = require('fs-extra')
const uuid = require('uuid/v4')
const { titleCase } = require('title-case')
const mime = require('mime-types')

class ChantsSource {
  static defaultOptions() {
    return {
      baseDir: undefined
    }
  }

  constructor(api, options) {
    this.api = api
    this.options = options
    this.context = options.baseDir ? api.resolve(options.baseDir) : api.context

    api.loadSource(async (actions) => {
      this.createCollections(actions)
      await this.loadTeams(actions)
    })
  }

  createCollections(actions) {
    actions.addCollection('Chant')
    actions.addCollection('Team')
  }

  async loadTeams(actions) {
    const teamsCollection = actions.getCollection('Team')
    teamsCollection.addReference('chants', 'Chant')

    const folders = await fs
      .readdirSync(this.context, {
        withFileTypes: true
      })
      .filter((dirent) => dirent.isDirectory())

    for (const folder of folders) {
      const teamSlug = slug(folder.name)

      const chantsIDs = await this.loadChants(actions, folder.name)

      teamsCollection.addNode({
        id: uuid(),
        path: `/teams/${teamSlug}`,
        name: this.formatTeamName(teamSlug),
        slug: teamSlug,
        logo: require.resolve(`../../assets/logos/${teamSlug}.png`),
        chants: chantsIDs
      })
    }
  }

  async loadChants(actions, teamName) {
    const chantsCollection = actions.getCollection('Chant')
    const chantsPath = this.getChantsPath(teamName)
    const chants = await fs.readdir(chantsPath)

    let createdChantsIDs = []
    for (const chant of chants) {
      const file = chant
      const filePath = path.resolve(chantsPath, chant)
      const origin = path.join(chantsPath, file)
      const content = await fs.readFile(filePath, { encoding: 'utf8' })

      const { dir, name, ext = '' } = path.parse(filePath)
      const mimeType =
        mime.lookup(filePath) || `application/x-${ext.replace('.', '')}`

      const id = uuid()
      const chantSlug = slug(name)
      chantsCollection.addNode({
        id: id,
        slug: chantSlug,
        path: `/teams/${teamName}/chants/${chantSlug}`,
        fileInfo: {
          extension: ext,
          directory: dir,
          path: file,
          name
        },
        internal: {
          mimeType,
          content,
          origin
        }
      })

      createdChantsIDs.push(id)
    }

    return createdChantsIDs
  }
  getChantsPath(team) {
    const basePath = this.options.baseDir
    if (team === undefined) {
      return basePath
    }

    return path.join(basePath, team)
  }

  formatTeamName(name) {
    return titleCase(name.replace('_', ' '))
  }
}

module.exports = ChantsSource
