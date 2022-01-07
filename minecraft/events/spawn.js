const mineflayerViewer = require('prismarine-viewer').mineflayer
const { infoLog } = require('../../constants/functions/logging.js')

module.exports = {
  name: "spawn",
  async execute(bot) {
    infoLog(mineflayerViewer(bot, { port: 3000, firstPerson: false }))
  }
}