const mineflayerViewer = require('prismarine-viewer').mineflayer
const { infoLog } = require('../../constants/functions/logging.js')

module.exports = {
  name: "spawn",
  async execute(bot) {
    mineflayerViewer(bot, { port: 3000, firstPerson: false, distance: 3 })
    infoLog('Logged into the Server')
  }
}