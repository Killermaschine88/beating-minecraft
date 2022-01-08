const mineflayer = require('mineflayer')
const { host, port, username, version } = require('../constants/config.json')

function startMinecraftBot() {

  const bot = mineflayer.createBot({
    host,
    port,
    username,
    version,
    renderDistance: 'tiny'
  })

  //Various Dependencies
  bot.mcData = require('minecraft-data')(bot.version)

  //Plugins
  bot.loadPlugin(require('mineflayer-collectblock').plugin)
  bot.loadPlugin(require('mineflayer-tool').plugin)
  bot.loadPlugin(require('mineflayer-pathfinder').pathfinder)

  return bot
}

module.exports = { startMinecraftBot }