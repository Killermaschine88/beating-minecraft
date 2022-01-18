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
  bot.loadPlugin(require('mineflayer-collectblock').plugin) // https://github.com/PrismarineJS/mineflayer-collectblock
  bot.loadPlugin(require('mineflayer-tool').plugin) // https://github.com/PrismarineJS/mineflayer-tool
  bot.loadPlugin(require('mineflayer-pathfinder').pathfinder) // https://github.com/PrismarineJS/mineflayer-pathfinder
  bot.loadPlugin(require("mineflayer-auto-eat")) // https://github.com/link-discord/mineflayer-auto-eat
  bot.loadPlugin(require('mineflayer-armor-manager')) // https://github.com/PrismarineJS/MineflayerArmorManager
  bot.loadPlugin(require('mineflayer-pvp').plugin) // https://github.com/PrismarineJS/mineflayer-pvp

  //Equip best armor
  bot.armorManager.equipAll()

  return bot
}

module.exports = { startMinecraftBot }