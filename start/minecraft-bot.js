const mineflayer = require('mineflayer')
const { host, port, username, version } = require('../constants/config.json')

function startMinecraftBot() {

  const bot = mineflayer.createBot({
    host,
    port,
    username,
    version
  })

  //Various Dependencies
  bot.mcData = require('minecraft-data')(bot.version)

  //Plugins
  bot.loadPlugin(require('mineflayer-collectblock').plugin)

  return bot
}

module.exports = { startMinecraftBot }