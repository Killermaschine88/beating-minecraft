const { warnLog } = require('../../constants/functions/log.js')

module.exports = {
  name: "health",
  async execute(reason) {
    warnLog(`${reason}`, 'HEALTH')
    if(bot.food === 20) {
      bot.autoEat.disable()
    } else {
      bot.autoEat.enable()
    }
  }
}