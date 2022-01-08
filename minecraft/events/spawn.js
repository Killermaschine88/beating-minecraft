const mineflayerViewer = require('prismarine-viewer').mineflayer
const { infoLog } = require('../../constants/functions/log.js')

module.exports = {
  name: "spawn",
  async execute() {
    mineflayerViewer(bot, { port: 3000, firstPerson: false, distance: 2 })
    infoLog('Logged into the Server')
  }
}