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
  bot.loadPlugin(require("mineflayer-auto-eat"))
  bot.loadPlugin(require('mineflayer-armor-manager'))
  bot.loadPlugin(require('mineflayer-pvp').plugin)

  //Equip best armor
  bot.armorManager.equipAll()

  return bot
}

module.exports = { startMinecraftBot }