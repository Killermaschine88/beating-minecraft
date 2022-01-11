const mineflayerViewer = require('prismarine-viewer').mineflayer
const { infoLog } = require('../../constants/functions/log.js')

module.exports = {
  name: "spawn",
  async execute() {
    //Web Viewer
    mineflayerViewer(bot, { port: 3000, firstPerson: false, distance: 2 })

    //Auto Eat Plugin
    bot.autoEat.options.priority = "foodPoints"
    bot.autoEat.options.bannedFood = ['rotten_flesh', 'poisonous_potato', 'spider_eye']
    bot.autoEat.options.eatingTimeout = 3

    infoLog('Logged into the Server')
  }
}